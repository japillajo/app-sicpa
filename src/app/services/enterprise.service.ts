import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Enterprise } from '../models/enterprise.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = environment.enterprisesUrl;
  }

  // CRUD methods
  getEnterprises() {
    const promise = new Promise<Enterprise[]>((resolve, reject) => {
      this.http.get<Enterprise[]>(this.url).subscribe({
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

  getEnterpriseById( id ) {
    const promise = new Promise<Enterprise>((resolve, reject) => {
      this.http.get<Enterprise>(this.url + '/' + id).subscribe({
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

  createEnterprise( enterprise: Enterprise ) {
    const promise = new Promise<Enterprise>((resolve, reject) => {
      this.http.post<Enterprise>(this.url, enterprise).subscribe({
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

  updateEnterprise( enterprise: Enterprise, id ) {
    const promise = new Promise<Enterprise>((resolve, reject) => {
      this.http.put<Enterprise>(this.url + '/' + id, enterprise).subscribe({
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

  deleteEnterprise( enterprise: Enterprise ) {

  }
}
