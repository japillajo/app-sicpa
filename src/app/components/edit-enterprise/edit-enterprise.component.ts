import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-enterprise',
  templateUrl: './edit-enterprise.component.html',
  styleUrls: ['./edit-enterprise.component.css']
})
export class EditEnterpriseComponent implements OnInit {

  public editForm: FormGroup;
  enterpriseRef: any;

  constructor(
    public enterpriseService: EnterpriseService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      address: [''],
      phone: [''],
      status: true,
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.enterpriseService.getEnterpriseById(id).then(
      (res) => {
        this.enterpriseRef = res;
        this.editForm = this.formBuilder.group({
          id : [this.enterpriseRef.id],
          name: [this.enterpriseRef.name],
          address: [this.enterpriseRef.address],
          phone: [this.enterpriseRef.phone],
          status: [this.enterpriseRef.status],
          createdDate: [this.enterpriseRef.createdDate],
          createdBy: [this.enterpriseRef.createdBy],
          modifiedDate: moment(new Date()),
          modifiedBy: 'aperez'
        });
      },
      (err) => console.log(err)
    );
  }

  async onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    await this.enterpriseService.updateEnterprise(this.editForm.value, id).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['']);
  }

}
