import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Client } from '../models/client';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  
  selectedClient: Client = new Client();
  channel: BehaviorSubject<any>= new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  GetAllClients() {        
    return this.http.get(environment.UrlBaseApi + 'Clients/GetAllClients');   
  }

  CreateClient(client: Client) {        
    return this.http.post(
      environment.UrlBaseApi + 'Clients/CreateClient',
      client
    );
    
  }

  DeleteClient(id: any) {
    return this.http.delete(
      environment.UrlBaseApi + 'Clients/DeleteClient/' + id
    );
  }

  UpdateClient(client: Client) {
    return this.http.put(environment.UrlBaseApi + 'Clients/EditClient', client);
  }

}
