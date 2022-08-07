import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-new-enterprise',
  templateUrl: './new-enterprise.component.html',
  styleUrls: ['./new-enterprise.component.css']
})
export class NewEnterpriseComponent implements OnInit {

  public enterpriseForm: FormGroup;

  constructor(
    public enterpriseService: EnterpriseService,
    public formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.enterpriseForm = this.formBuilder.group({
      name : [''],
      address : [''],
      phone : [''],
      status : true,
      createdDate : moment(new Date()),
      createdBy : 'jpillajo',
      modifiedDate : moment(new Date()),
      modifiedBy : 'jpillajo'
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.enterpriseService.createEnterprise(this.enterpriseForm.value).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate( [''] );
  }

}
