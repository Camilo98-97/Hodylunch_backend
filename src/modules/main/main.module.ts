import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ClientsModules } from '../clients/clients.module'; 

@Module({
  imports: [DatabaseModule, ClientsModules],
  exports: [DatabaseModule, ClientsModules]
})
export class MainModule {}