import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../../services/policy.service';
import { Policy } from '../../../models/policy';

@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css'],
})
export class PolicylistComponent implements OnInit {
  
  constructor(private policyService: PolicyService) {
  
  }

  policyList: any;
  buscar:string;
  
  ngOnInit(): void {       
    
    this.policyService.channel.subscribe(rta=> {
      this.GetAllPolicies();
    });    
  }

  GetAllPolicies() {

    this.policyService.GetAllPolicies()
      .subscribe((data) => {  
        this.policyList=data;                       

        let   coverageTypes: any = [
          {id: 1, name:'earthquakes'},
          {id: 2, name:'fire'},
          {id: 3, name:'Stole'},
          {id: 4, name:'Lost'},
          {id: 5, name:'Other'}    
        ];

        let riskTypes: any = [
          {id: 1, name:'low'},
          {id: 2, name:'medium'},
          {id: 3, name:'upperMedium'},
          {id: 4, name:'high'}  
        ];

        this.policyList.forEach(function(policy){                          
          policy.coverageType= coverageTypes.find(element=>{
              return element.id===policy.coverageType;
          }).name;

          policy.riskType= riskTypes.find(element=>{
            return element.id===policy.riskType;
          }).name;

        });
        
                
    });
  }

  DeletePolicy(id: any){
    this.policyService.DeletePolicy(id).subscribe(rta=>{        
      this.policyService.channel.next(true);
      alert('Policy deleted successfully');
    });    
    
  }

  EditPolicy(policyForm: Policy) {
    this.policyService.selectedPolicy= policyForm;
  }

  consultarPolicy(){
    
    this.policyList= this.policyList.filter(data=>{
      return data.name.toString().trim() === this.buscar;
    });

      if(this.policyList.length===0){
        this.GetAllPolicies();
        alert('client was not found');
      }
  }

  AssignPolicy(id: any){
    alert('Action not implemented yet!!');
  }




}
