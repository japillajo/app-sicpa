import { Employee } from './employee.model';
import { Department } from './department.model';
import { Moment } from 'moment';

export class Departmentemployees {
    id: number;
    employeeId: number;
    //employee: Employee;
    departmentId: number;
    department: Department;
    status: boolean;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment;
    modifiedBy: string;
}
