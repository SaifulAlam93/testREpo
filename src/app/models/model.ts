export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

export interface AttendanceRecord {
  id: number;
  employeeId: number;
  date: string;
  status: 'present' | 'absent' | 'late' | 'half-day';
  checkIn: string | null;
  checkOut: string | null;
  hoursWorked: number;
}

export interface AttendanceData {
  employees: Employee[];
  attendance: AttendanceRecord[];
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  category?: string;
  image?: string;
}

