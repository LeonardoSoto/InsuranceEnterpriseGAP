import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
   
  constructor(public clientService: ClientService) {
  
  }

  ngOnInit(): void {}

  SaveChanges(clientForm: NgForm) {
    if(clientForm.value.id===undefined){
      this.clientService.CreateClient(clientForm.value).subscribe(rta=>{        
        this.clientService.channel.next(true);
        alert('se agrego satisfactoriamente');
      });      
      
    }else{
      this.clientService.UpdateClient(clientForm.value).subscribe(rta=>{
        this.clientService.channel.next(true);
        alert('se edito satisfactoriamente');
      });
      
    }

    this.clientService.selectedClient=new Client();
    
  }
}
