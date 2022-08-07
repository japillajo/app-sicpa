import { Moment } from 'moment';
import { Departmentemployees } from './departmentemployees.model';
import { Department } from './department.model';

export class Employee {
    id: number;
    name: string;
    surname: string;
    position: string;
    email: string;
    age: number;
    status: boolean;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment;
    modifiedBy: string;
    departmentEmployees: Departmentemployees[];
    activeDepartment: Department;
}
