import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../models/enterprise.model';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.css']
})
export class NewDepartmentComponent implements OnInit {

  Enterprises: Enterprise[];
  public departmentForm: FormGroup;

  constructor(
    public departmentService: DepartmentService,
    public enterpriseService: EnterpriseService,
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.departmentForm = this.formBuilder.group({
      name : [''],
      description : [''],
      phone : [''],
      status : true,
      enterpriseId : 0,
      createdDate : moment(new Date()),
      createdBy : 'jpillajo',
      modifiedDate : moment(new Date()),
      modifiedBy : 'jpillajo'
    });
  }

  ngOnInit(): void {
    this.enterpriseService.getEnterprises().then(
      (res) => this.Enterprises = res,
      (err) => console.log(err) 
    );
  }

  async onSubmit() {
    await this.departmentService.createDepartment(this.departmentForm.value).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate( ['departments'] );
  }

}
