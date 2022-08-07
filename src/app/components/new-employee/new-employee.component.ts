import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
import { Departmentemployees } from '../../models/departmentemployees.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  Departments: Department[];
  public employeeForm: FormGroup;

  constructor(
    public employeeService: EmployeeService,
    public departmentService: DepartmentService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.employeeForm = this.formBuilder.group({
      name : [''],
      surname : [''],
      position : [''],
      email : [''],
      age : [''],
      status : true,
      departmentId: 0,
      createdDate : moment(new Date()),
      createdBy : 'jpillajo',
      modifiedDate : moment(new Date()),
      modifiedBy : 'jpillajo'
    });
   }

   ngOnInit(): void {
    this.departmentService.getDepartments().then(
      (res) => this.Departments = res,
      (err) => console.log(err) 
    );
  }

  async onSubmit() {
    await this.employeeService.createEmployee(this.employeeForm.value).then(
      (res) => {
        console.log(res);
        const de : Departmentemployees = {
          id : 0,
          employeeId : res.id,
          departmentId : this.employeeForm.controls['departmentId'].value,
          status : true,
          createdDate : res.createdDate,
          createdBy : res.createdBy,
          modifiedDate : res.modifiedDate,
          modifiedBy : res.modifiedBy,
          department : null
        };
        this.employeeService.createDepartmentemployees(de).then(
          (res) => console.log(res),
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );

    this.router.navigate( ['employees'] );
  }

}
