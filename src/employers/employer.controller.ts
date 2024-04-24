import { Employer } from './employer.entity';
import { EmployerService } from './employer.service';
import { Controller, Get, Put, Param, Body, Post, Delete } from '@nestjs/common';

@Controller('employers')
export class EmployerController {
    constructor(private readonly employerService: EmployerService) {}

    @Get()
    findAll() {
        return this.employerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employerService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateEmployer: Employer) {
        return this.employerService.update(+id, updateEmployer);
    }

    @Post()
    create(@Body() createEmployer: Employer) {
        return this.employerService.create(createEmployer);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.employerService.remove(+id);
    }
}
