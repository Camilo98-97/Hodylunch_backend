import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { Client } from 'src/modules/clients/entity/clients.entity'

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    async useFactory() {
      return {
        type: "postgres",
        host: "localhost", 
        port: 5432,
        username: "postgres",
        password: "camiloman",
        database: "hodylunch_db",
        entities: [Client]
      } as DataSourceOptions;
    },
  }),
];