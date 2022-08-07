import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Employees: Employee[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().then(
      (res) => {
        this.Employees = res;
        this.Employees.forEach(employee => {
          employee.activeDepartment = employee.departmentEmployees[0] ? employee.departmentEmployees[0].department : new Department();
        });
      },
      (err) => console.log(err)
    );
  }

}
