import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/clientComponent/client/client.component';
import { ClientlistComponent } from './components/clientComponent/clientlist/clientlist.component';
import { PolicyComponent } from './components/policyComponent/policy/policy.component';
import { PolicylistComponent } from './components/policyComponent/policylist/policylist.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AssignedpoliciesComponent } from './components/policyAssigmentComponent/assignedpolicies/assignedpolicies.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientlistComponent,
    PolicyComponent,
    PolicylistComponent,
    AssignedpoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
