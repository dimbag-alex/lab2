import { Client } from "./client.entity";
import { ClientService } from "./client.service";
import { Controller, Get, Put ,Param, Body, Post, Delete } from "@nestjs/common";

@Controller('clients')
export class ClientsController {
    constructor( private readonly clientsService: ClientService ) {}

    @Get()
        findAll() {
            return this.clientsService.findAll();
        }   

    @Get(':id')
        findOne(@Param('id') id: string) {
            return this.clientsService.findOne(+id);
        }
    @Put(':id')
        update(@Param(':id') id: string, @Body() updateClient: Client) {
            return this.clientsService.update(+id, updateClient);
        }
    @Post()
        create(@Body() createClient: Client) {
            return this.clientsService.create(createClient);
        }
    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.clientsService.remove(+id)
        }
}
