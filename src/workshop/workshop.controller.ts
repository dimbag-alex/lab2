import { Workshop } from './workshop.entity';
import { WorkshopService } from './workshop.service';
import { Controller, Get, Put, Param, Body, Post, Delete } from '@nestjs/common';

@Controller('workshops')
export class WorkshopController {
    constructor(private readonly workshopService: WorkshopService) {}

    @Get()
    findAll() {
        return this.workshopService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workshopService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateWorkshop: Workshop) {
        return this.workshopService.update(+id, updateWorkshop);
    }

    @Post()
    create(@Body() createWorkshop: Workshop) {
        return this.workshopService.create(createWorkshop);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workshopService.remove(+id);
    }
}
