import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
import { Departmentemployees } from '../../models/departmentemployees.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  Departments: Department[];
  public editForm: FormGroup;
  employeeRef: any;

  constructor(
    public employeeService: EmployeeService,
    public departmentService: DepartmentService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      position: [''],
      email: [''],
      departmentId: 0,
      age: [''],
      status: true,
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(id).then(
      (res) => {
        this.employeeRef = res;
        this.employeeRef.activeDeparment = res.departmentEmployees && res.departmentEmployees.length > 0 ? res.departmentEmployees[0].department : new Department();
        this.editForm = this.formBuilder.group({
          id: [this.employeeRef.id],
          name: [this.employeeRef.name],
          surname: [this.employeeRef.surname],
          position: [this.employeeRef.position],
          email: [this.employeeRef.email],
          age: [this.employeeRef.age],
          departmentId: this.employeeRef.activeDeparment.id  ? this.employeeRef.activeDeparment.id : 0,
          status: [this.employeeRef.status],
          createdDate: [this.employeeRef.createdDate],
          createdBy: [this.employeeRef.createdBy],
          modifiedDate: moment(new Date()),
          modifiedBy: 'aperez'
        });
      },
      (err) => console.log(err)
    );

    this.departmentService.getDepartments().then(
      (res) => this.Departments = res,
      (err) => console.log(err)
    );
  }

  async onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    await this.employeeService.updateEmployee(this.editForm.value, id).then(
      (res) => {
        console.log(res);
        
        let departmentemployeesToUpdate = this.employeeRef.departmentEmployees ? this.employeeRef.departmentEmployees[0] : new Departmentemployees();
        if(departmentemployeesToUpdate) {
          departmentemployeesToUpdate.status = false;
          departmentemployeesToUpdate.modifiedBy = 'aperez';
          departmentemployeesToUpdate.modifiedDate = moment(new Date());
          this.employeeService.updateDepartmentEmployees(departmentemployeesToUpdate, departmentemployeesToUpdate.id).then(
            (res) => console.log(res),
            (err) => console.log(err)
          );
        } 

        const de : Departmentemployees = {
          id : 0,
          employeeId : res.id,
          departmentId : this.editForm.controls['departmentId'].value,
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
    this.router.navigate(['employees']);
  }

}
