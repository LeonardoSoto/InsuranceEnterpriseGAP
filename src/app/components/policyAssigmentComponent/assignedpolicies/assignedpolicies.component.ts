import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../../services/policy.service';

@Component({
  selector: 'app-assignedpolicies',
  templateUrl: './assignedpolicies.component.html',
  styleUrls: ['./assignedpolicies.component.css'],
})
export class AssignedpoliciesComponent implements OnInit {
  constructor(private policyService: PolicyService) {}

  policyAssigmentList: any;
  buscar:string;

  ngOnInit(): void {
    this.policyService.channel.subscribe(rta=> {
      this.GetAllPolicyAssigments();
    });    
  }

  GetAllPolicyAssigments() {
    this.policyService.GetAllPolicyAssigments().subscribe((data) => {
      this.policyAssigmentList = data;      
    });
  }

  consultarPolicy(){
    
    this.policyAssigmentList= this.policyAssigmentList.filter(data=>{
      return data.policy.name.toString().trim() === this.buscar;
    });

      if(this.policyAssigmentList.length===0){
        this.GetAllPolicyAssigments();
        alert('Policy assigment was not found!!');
      }
  }

  DeleteAssignedPolicy(id: any){
    this.policyService.DeleteAssignedPolicy(id).subscribe(rta=>{     
      this.policyService.channel.next(true);         
      alert('se cancelo la poliza satisfactoriamente');
    });    
    
  }


}
