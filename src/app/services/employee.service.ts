import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Departmentemployees } from '../models/departmentemployees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string;
  urlDepartmentemployees: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.employeesUrl;
    this.urlDepartmentemployees = environment.departmentemployeesUrl;
  }

  // CRUD methods
  getEmployees() {
    const promise = new Promise<Employee[]>((resolve, reject) => {
      this.http.get<Employee[]>(this.url).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  getEmployeeById(id) {
    const promise = new Promise<Employee>((resolve, reject) => {
      this.http.get<Employee>(this.url + '/' + id).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  createEmployee(employee: Employee) {
    const promise = new Promise<Employee>((resolve, reject) => {
      this.http.post<Employee>(this.url, employee).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  createDepartmentemployees(departmentemployees: Departmentemployees) {
    const promise = new Promise<Departmentemployees>((resolve, reject) => {
      this.http.post<Departmentemployees>(this.urlDepartmentemployees, departmentemployees).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  updateEmployee(employee: Employee, id) {
    const promise = new Promise<Employee>((resolve, reject) => {
      this.http.put<Employee>(this.url + '/' + id, employee).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  updateDepartmentEmployees(departmentemployees: Departmentemployees, id) {
    const promise = new Promise<Departmentemployees>((resolve, reject) => {
      this.http.put<Departmentemployees>(this.urlDepartmentemployees + '/' + id, departmentemployees).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }

  deleteEmployee(employee: Employee) {

  }
}
