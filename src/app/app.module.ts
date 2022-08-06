import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { NewEnterpriseComponent } from './components/new-enterprise/new-enterprise.component';
import { EditEnterpriseComponent } from './components/edit-enterprise/edit-enterprise.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseComponent,
    NewEnterpriseComponent,
    EditEnterpriseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
