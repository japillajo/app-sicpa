import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = environment.departmentsUrl;
  }

  // CRUD methods
  getDepartments() {
    const promise = new Promise<Department[]>((resolve, reject) => {
      this.http.get<Department[]>(this.url).subscribe({
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

  getDepartmentById( id ) {
    const promise = new Promise<Department>((resolve, reject) => {
      this.http.get<Department>(this.url + '/' + id).subscribe({
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

  createDepartment( department: Department ) {
    const promise = new Promise<Department>((resolve, reject) => {
      this.http.post<Department>(this.url, department).subscribe({
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

  updateDepartment( department: Department, id ) {
    const promise = new Promise<Department>((resolve, reject) => {
      this.http.put<Department>(this.url + '/' + id, department).subscribe({
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

  deleteDepartment( department: Department ) {

  }
}
