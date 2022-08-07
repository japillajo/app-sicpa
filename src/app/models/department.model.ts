import { Moment } from 'moment';
import { Enterprise } from './enterprise.model';

export class Department {
    id: number;
    name: string;
    description: string;
    phone: string;
    status: boolean;
    enterprise: Enterprise;
    enterpriseId: number;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment;
    modifiedBy: string;
}
