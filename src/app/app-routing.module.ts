import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { NewEnterpriseComponent } from './components/new-enterprise/new-enterprise.component';
import { EditEnterpriseComponent } from './components/edit-enterprise/edit-enterprise.component';

const routes: Routes = [
  { path: '', component: EnterpriseComponent },
  { path: 'new-enterprise', component: NewEnterpriseComponent },
  { path: 'edit-enterprise/:id', component: EditEnterpriseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
