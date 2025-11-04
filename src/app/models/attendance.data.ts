import { AttendanceData } from "./model";

export const ATTENDANCE_DATA: AttendanceData = {
  employees: [
    {
      id: 1,
      name: 'John Doe',
      department: 'Engineering',
      position: 'Software Developer'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Marketing',
      position: 'Marketing Manager'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      department: 'Sales',
      position: 'Sales Executive'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      department: 'Engineering',
      position: 'Frontend Developer'
    },
    {
      id: 5,
      name: 'David Brown',
      department: 'HR',
      position: 'HR Manager'
    },
    {
      id: 6,
      name: 'Emily Davis',
      department: 'Finance',
      position: 'Accountant'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      department: 'Engineering',
      position: 'DevOps Engineer'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      department: 'Sales',
      position: 'Sales Manager'
    },
    {
      id: 9,
      name: 'James Miller',
      department: 'Marketing',
      position: 'Content Writer'
    },
    {
      id: 10,
      name: 'Jennifer Lee',
      department: 'Finance',
      position: 'Financial Analyst'
    }
  ],
  attendance: [
    {
      id: 1,
      employeeId: 1,
      date: '2024-01-15',
      status: 'present',
      checkIn: '09:05',
      checkOut: '17:30',
      hoursWorked: 8.4
    },
    {
      id: 2,
      employeeId: 1,
      date: '2024-01-16',
      status: 'present',
      checkIn: '09:00',
      checkOut: '17:00',
      hoursWorked: 8.0
    },
    {
      id: 3,
      employeeId: 1,
      date: '2024-01-17',
      status: 'absent',
      checkIn: null,
      checkOut: null,
      hoursWorked: 0
    },
    {
      id: 4,
      employeeId: 2,
      date: '2024-01-15',
      status: 'present',
      checkIn: '08:55',
      checkOut: '17:10',
      hoursWorked: 8.2
    },
    {
      id: 5,
      employeeId: 2,
      date: '2024-01-16',
      status: 'late',
      checkIn: '10:30',
      checkOut: '18:00',
      hoursWorked: 7.5
    },
    {
      id: 6,
      employeeId: 3,
      date: '2024-01-15',
      status: 'present',
      checkIn: '09:10',
      checkOut: '17:45',
      hoursWorked: 8.6
    },
    {
      id: 7,
      employeeId: 4,
      date: '2024-01-16',
      status: 'present',
      checkIn: '08:45',
      checkOut: '17:15',
      hoursWorked: 8.5
    },
    {
      id: 8,
      employeeId: 5,
      date: '2024-01-17',
      status: 'half-day',
      checkIn: '09:00',
      checkOut: '13:00',
      hoursWorked: 4.0
    },
    {
      id: 9,
      employeeId: 6,
      date: '2024-01-15',
      status: 'present',
      checkIn: '09:05',
      checkOut: '17:20',
      hoursWorked: 8.2
    },
    {
      id: 10,
      employeeId: 7,
      date: '2024-01-16',
      status: 'absent',
      checkIn: null,
      checkOut: null,
      hoursWorked: 0
    },
    {
      id: 11,
      employeeId: 8,
      date: '2024-01-17',
      status: 'present',
      checkIn: '08:50',
      checkOut: '17:05',
      hoursWorked: 8.2
    },
    {
      id: 12,
      employeeId: 9,
      date: '2024-01-15',
      status: 'late',
      checkIn: '11:00',
      checkOut: '18:30',
      hoursWorked: 7.5
    },
    {
      id: 13,
      employeeId: 10,
      date: '2024-01-16',
      status: 'present',
      checkIn: '09:00',
      checkOut: '17:00',
      hoursWorked: 8.0
    },
    {
      id: 14,
      employeeId: 1,
      date: '2024-02-01',
      status: 'present',
      checkIn: '09:02',
      checkOut: '17:25',
      hoursWorked: 8.4
    },
    {
      id: 15,
      employeeId: 2,
      date: '2024-02-01',
      status: 'present',
      checkIn: '08:58',
      checkOut: '17:08',
      hoursWorked: 8.2
    },
    {
      id: 16,
      employeeId: 3,
      date: '2024-02-02',
      status: 'absent',
      checkIn: null,
      checkOut: null,
      hoursWorked: 0
    },
    {
      id: 17,
      employeeId: 4,
      date: '2024-02-02',
      status: 'present',
      checkIn: '09:15',
      checkOut: '17:45',
      hoursWorked: 8.5
    },
    {
      id: 18,
      employeeId: 5,
      date: '2024-02-03',
      status: 'half-day',
      checkIn: '09:00',
      checkOut: '13:30',
      hoursWorked: 4.5
    },
    {
      id: 19,
      employeeId: 6,
      date: '2024-02-03',
      status: 'present',
      checkIn: '08:45',
      checkOut: '17:15',
      hoursWorked: 8.5
    },
    {
      id: 20,
      employeeId: 7,
      date: '2024-03-01',
      status: 'present',
      checkIn: '09:08',
      checkOut: '17:35',
      hoursWorked: 8.4
    },
    {
      id: 21,
      employeeId: 8,
      date: '2024-03-01',
      status: 'late',
      checkIn: '10:45',
      checkOut: '18:15',
      hoursWorked: 7.5
    },
    {
      id: 22,
      employeeId: 9,
      date: '2024-03-02',
      status: 'present',
      checkIn: '09:05',
      checkOut: '17:10',
      hoursWorked: 8.1
    },
    {
      id: 23,
      employeeId: 10,
      date: '2024-03-02',
      status: 'absent',
      checkIn: null,
      checkOut: null,
      hoursWorked: 0
    }
  ]
};