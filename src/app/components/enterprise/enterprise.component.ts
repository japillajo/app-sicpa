import { Component, OnInit } from '@angular/core';
import { Enterprise } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  Enterprises: Enterprise[];

  constructor(
    private enterpriseService: EnterpriseService
  ) { }

  ngOnInit(): void {
    this.enterpriseService.getEnterprises().then(
      (res) => this.Enterprises = res,
      (err) => console.log(err) 
    );
  }

  //deleteRow = (enterprise) => this.enterpriseService.deleteEnterprise(enterprise);

}
