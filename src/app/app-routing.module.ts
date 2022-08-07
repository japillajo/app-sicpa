import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { NewEnterpriseComponent } from './components/new-enterprise/new-enterprise.component';
import { EditEnterpriseComponent } from './components/edit-enterprise/edit-enterprise.component';
import { DepartmentComponent } from './components/department/department.component';
import { NewDepartmentComponent } from './components/new-department/new-department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'enterprises', component: EnterpriseComponent },
  { path: 'new-enterprise', component: NewEnterpriseComponent },
  { path: 'edit-enterprise/:id', component: EditEnterpriseComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'new-department', component: NewDepartmentComponent },
  { path: 'edit-department/:id', component: EditDepartmentComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'new-employee', component: NewEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
