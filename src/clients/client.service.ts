import { HttpStatus, Injectable } from "@nestjs/common";
import { DataSourceService } from "src/datasource/datasource.service";
import { Client } from "./client.entity";

@Injectable()
export class ClientService {
    constructor(private readonly datasourceService: DataSourceService) {}
    create(client: Client){
        this.datasourceService.getClients().push(client);
        return client;
    }
    findOne(id:number) {
        return this.datasourceService
            .getClients()
            .find((client) => client.id === id);
    }
    findAll(): Client[] {
        return this.datasourceService.getClients()
    }
    update(id:number, updateClient: Client) {
        const index = this.datasourceService
            .getClients()
            .findIndex((client) => client.id === id);
        this.datasourceService.getClients()[index] = updateClient;
        return this.datasourceService.getClients()[index]
    }
    remove(id:number){
        const index = this.datasourceService
            .getClients()
            .findIndex((client) => client.id === id);
        this.datasourceService.getClients().splice(index, 1);
        return HttpStatus.OK
    }
}
