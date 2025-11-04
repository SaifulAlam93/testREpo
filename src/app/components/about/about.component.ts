import { Component, OnInit } from '@angular/core';
import { Employee, AttendanceRecord } from 'src/app/models/model';
import { AttendanceFilters, AttendanceService } from 'src/app/services/attendance.service';


interface AttendanceRow {
  employee: Employee;
  dates: { [date: string]: string };
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  attendanceData: AttendanceRow[] = [];
  allDates: string[] = [];
  filteredData: AttendanceRow[] = [];
  
  // Filters
  departments: string[] = [];
  selectedDepartment: string = '';
  dateRange = {
    start: '',
    end: ''
  };

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendanceData();
  }

  loadAttendanceData(): void {
    const employees = this.attendanceService.getEmployees();
    const records = this.attendanceService.getAttendanceRecords();
    
    // Get all unique dates
    this.allDates = [...new Set(records.map(record => record.date))].sort();
    
    // Get all departments
    this.departments = [...new Set(employees.map(emp => emp.department))];
    
    // Create attendance matrix
    this.attendanceData = employees.map(employee => {
      const employeeRecords = records.filter(record => record.employeeId === employee.id);
      const dates: { [date: string]: string } = {};
      
      this.allDates.forEach(date => {
        const record = employeeRecords.find(r => r.date === date);
        dates[date] = record ? this.getStatusSymbol(record.status) : '-';
      });
      
      return { employee, dates };
    });
    
    this.filteredData = [...this.attendanceData];
  }

  getStatusSymbol(status: string): string {
    switch (status) {
      case 'present': return 'P';
      case 'absent': return 'A';
      case 'late': return 'L';
      case 'half-day': return 'H';
      default: return '-';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'P': return '#10b981'; // Green for Present
      case 'A': return '#ef4444'; // Red for Absent
      case 'L': return '#f59e0b'; // Orange for Late
      case 'H': return '#8b5cf6'; // Purple for Half-day
      default: return '#6b7280';  // Gray for No data
    }
  }

  getStatusTooltip(symbol: string): string {
    switch (symbol) {
      case 'P': return 'Present';
      case 'A': return 'Absent';
      case 'L': return 'Late';
      case 'H': return 'Half Day';
      default: return 'No Record';
    }
  }

  applyFilters(): void {
    this.filteredData = this.attendanceData.filter(row => {
      const matchesDepartment = !this.selectedDepartment || 
                               row.employee.department === this.selectedDepartment;
      
      // You can add date range filtering here if needed
      return matchesDepartment;
    });
  }

  clearFilters(): void {
    this.selectedDepartment = '';
    this.dateRange = { start: '', end: '' };
    this.filteredData = [...this.attendanceData];
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }

  getPresentCount(dates: { [date: string]: string }): number {
    return Object.values(dates).filter(status => status === 'P').length;
  }

  getAbsentCount(dates: { [date: string]: string }): number {
    return Object.values(dates).filter(status => status === 'A').length;
  }

  exportToExcel(): void {
    // Simple CSV export
    const headers = ['Employee', 'Department', ...this.allDates.map(date => this.formatDate(date)), 'Total Present', 'Total Absent'];
    const csvData = this.filteredData.map(row => [
      row.employee.name,
      row.employee.department,
      ...this.allDates.map(date => row.dates[date]),
      this.getPresentCount(row.dates),
      this.getAbsentCount(row.dates)
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'attendance_sheet.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}