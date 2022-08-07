import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  Departments: Department[];

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().then(
      (res) => this.Departments = res,
      (err) => console.log(err) 
    );
  }

}
