import { Moment } from "moment";

export class Enterprise {
    id: number;
    name: string;
    address: string;
    phone: string;
    status: boolean;
    createdDate: Moment;
    createdBy: string;
    modifiedDate: Moment;
    modifiedBy: string;

}