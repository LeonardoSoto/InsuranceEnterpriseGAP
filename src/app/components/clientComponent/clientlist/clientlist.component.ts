import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
  
  clientList: any;
  buscar:string;
  
  constructor(private clientService: ClientService) {
  
  }

  ngOnInit(): void {    
    this.clientService.channel.subscribe(rta=> {
      this.GetAllClients();
    });    
  }

  GetAllClients() {
    this.clientService.GetAllClients()
      .subscribe((data) => {             
        this.clientList= data;        
    });
  }

  DeleteClient(id: any){
    this.clientService.DeleteClient(id).subscribe(rta=>{        
      this.clientService.channel.next(true);
    });
    
    alert('se elimino satisfactoriamente');
  }

  EditClient(clientForm: Client) {
    this.clientService.selectedClient= clientForm;
  }

  consultarClient(){
    
    this.clientList= this.clientList.filter(data=>{
      return data.name.toString().trim() === this.buscar;
    });

      if(this.clientList.length===0){
        this.GetAllClients();
        alert('client no encontrado');
      }
  }





}
