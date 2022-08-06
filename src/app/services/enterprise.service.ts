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
    return this.http.get<Enterprise[]>(this.url); 
  }

  getEnterpriseById( id ) {

  }

  createEnterprise( enterprise: Enterprise ) {

  }

  deleteEnterprise( enterprise: Enterprise ) {

  }
}
