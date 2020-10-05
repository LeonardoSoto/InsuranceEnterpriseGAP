import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/clientComponent/client/client.component';
import { PolicyComponent } from './components/policyComponent/policy/policy.component';
import { AssignedpoliciesComponent } from './components/policyAssigmentComponent/assignedpolicies/assignedpolicies.component';



const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'policy', component:PolicyComponent},
  {path: 'assignedPolicies', component:AssignedpoliciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
