import { Controller, Get } from '@nestjs/common';
import { ClientService } from './clients.service';

@Controller() 
export class ClientsController { 
    constructor (private readonly clientService: ClientService) {}

@Get()
getClients(){
    return this.clientService.getClients();
}

}

