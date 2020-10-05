import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Policy } from '../models/policy';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  
  selectedPolicy: Policy = new Policy();
  channel: BehaviorSubject<any>= new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  GetAllPolicies() {        
    return this.http.get(environment.UrlBaseApi + 'Policies/GetAllPolicies');   
  }

  CreatePolicy(policy: Policy) {     
    
    let newCoverageType: number = +policy.coverageType;
    policy.coverageType= newCoverageType;
    let newRiskType: number= +policy.riskType;
    policy.riskType=newRiskType;

    return this.http.post(
      environment.UrlBaseApi + 'Policies/CreatePolicy',
      policy
    );
    
  }

  DeletePolicy(id: any) {
    return this.http.delete(
      environment.UrlBaseApi + 'Policies/DeletePolicy/' + id
    );
  }

  UpdatePolicy(policy: Policy) {

    let newCoverageType: number = +policy.coverageType;
    policy.coverageType= newCoverageType;
    let newRiskType: number= +policy.riskType;
    policy.riskType=newRiskType;

    return this.http.put(environment.UrlBaseApi + 'Policies/EditPolicy', policy);
  }

  GetAllPolicyAssigments() {        
    return this.http.get(environment.UrlBaseApi + 'Policies/GetAllPolicyAssigments');       
  }

  DeleteAssignedPolicy(id: any) {
    return this.http.delete(
      environment.UrlBaseApi + 'Policies/DeleteAssignedPolicy/' + id
    );
  }

}
