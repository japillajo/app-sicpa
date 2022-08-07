import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Enterprise } from '../../models/enterprise.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  Enterprises: Enterprise[];
  public editForm: FormGroup;
  departmentRef: any;

  constructor(
    public departmentService: DepartmentService,
    public enterpriseService: EnterpriseService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      name: [''],
      description: [''],
      phone: [''],
      enterpriseId : 0,
      status: true,
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.departmentService.getDepartmentById(id).then(
      (res) => {
        this.departmentRef = res;
        this.editForm = this.formBuilder.group({
          id : [this.departmentRef.id],
          name: [this.departmentRef.name],
          description: [this.departmentRef.description],
          phone: [this.departmentRef.phone],
          enterpriseId: [this.departmentRef.enterpriseId],
          status: [this.departmentRef.status],
          createdDate: [this.departmentRef.createdDate],
          createdBy: [this.departmentRef.createdBy],
          modifiedDate: moment(new Date()),
          modifiedBy: 'aperez'
        });
      },
      (err) => console.log(err)
    );

    this.enterpriseService.getEnterprises().then(
      (res) => this.Enterprises = res,
      (err) => console.log(err) 
    );
  }

  async onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    await this.departmentService.updateDepartment(this.editForm.value, id).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['departments']);
  }

}
