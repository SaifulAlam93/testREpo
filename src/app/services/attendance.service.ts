import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ATTENDANCE_DATA } from '../models/attendance.data';
import { AttendanceData, Employee, AttendanceRecord } from '../models/model';


export interface AttendanceFilters {
  employeeId: number | null;
  startDate: string | null;
  endDate: string | null;
  status: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceData: AttendanceData = ATTENDANCE_DATA;
  private filters = new BehaviorSubject<AttendanceFilters>({
    employeeId: null,
    startDate: null,
    endDate: null,
    status: null
  });

  constructor() {}

  getEmployees(): Employee[] {
    return this.attendanceData.employees;
  }

  getAttendanceRecords(): AttendanceRecord[] {
    return this.attendanceData.attendance;
  }

  getFilteredAttendance(filters: AttendanceFilters): AttendanceRecord[] {
    return this.attendanceData.attendance.filter(record => {
      const recordDate = new Date(record.date);
      const matchesEmployee = !filters.employeeId || record.employeeId === filters.employeeId;
      const matchesStartDate = !filters.startDate || recordDate >= new Date(filters.startDate);
      const matchesEndDate = !filters.endDate || recordDate <= new Date(filters.endDate);
      const matchesStatus = !filters.status || record.status === filters.status;

      return matchesEmployee && matchesStartDate && matchesEndDate && matchesStatus;
    });
  }

  getEmployeeName(employeeId: number): string {
    const employee = this.attendanceData.employees.find(emp => emp.id === employeeId);
    return employee ? employee.name : 'Unknown';
  }

  getStatusStats(records: AttendanceRecord[]): any {
    const stats = {
      present: 0,
      absent: 0,
      late: 0,
      'half-day': 0,
      total: records.length
    };

    records.forEach(record => {
      if (stats[record.status] !== undefined) {
        stats[record.status]++;
      }
    });

    return stats;
  }

  setFilters(filters: AttendanceFilters): void {
    this.filters.next(filters);
  }

  getFilters(): Observable<AttendanceFilters> {
    return this.filters.asObservable();
  }

  getFilteredAttendanceObservable(): Observable<AttendanceRecord[]> {
    return this.filters.pipe(
      map(filters => this.getFilteredAttendance(filters))
    );
  }
}