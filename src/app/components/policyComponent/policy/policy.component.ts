import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Policy } from 'src/app/models/policy';
import { PolicyService } from '../../../services/policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent implements OnInit {
   
  constructor(public policyService: PolicyService) {
  
  }

  coverageTypes: any = [
    {id: 1, name:'earthquakes'},
    {id: 2, name:'fire'},
    {id: 3, name:'Stole'},
    {id: 4, name:'Lost'},
    {id: 5, name:'Other'}    
  ];

  riskTypes: any = [
    {id: 1, name:'low'},
    {id: 2, name:'medium'},
    {id: 3, name:'upperMedium'},
    {id: 4, name:'high'}  
  ];

  ngOnInit(): void {}

  SaveChanges(policyForm: NgForm) {    

    if(policyForm.value.id===undefined){
      this.policyService.CreatePolicy(policyForm.value).subscribe(rta=>{        
        this.policyService.channel.next(true);
        alert('se agrego satisfactoriamente');
      });      
      
    }else{
      this.policyService.UpdatePolicy(policyForm.value).subscribe(rta=>{
        this.policyService.channel.next(true);
        alert('se edito satisfactoriamente');
      });
      
    }

    this.policyService.selectedPolicy= new Policy();

  }
}
