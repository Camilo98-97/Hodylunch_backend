import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entity/clients.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {}

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(ClientRepository)
        private readonly clientRepository: ClientRepository
    ) {}

    async getClients() {
        try {
            return await this.clientRepository.find();
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}


