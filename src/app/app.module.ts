import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { NewEnterpriseComponent } from './components/new-enterprise/new-enterprise.component';
import { EditEnterpriseComponent } from './components/edit-enterprise/edit-enterprise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './components/department/department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { NewDepartmentComponent } from './components/new-department/new-department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseComponent,
    NewEnterpriseComponent,
    EditEnterpriseComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    NewDepartmentComponent,
    EmployeesComponent,
    NewEmployeeComponent,
    EditEmployeeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
