import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSourceService } from 'src/datasource/datasource.service';
import { Workshop } from './workshop.entity';

@Injectable()
export class WorkshopService {
    constructor(private readonly datasourceService: DataSourceService) {}

    create(workshop: Workshop) {
        this.datasourceService.getWorkshops().push(workshop);
        return workshop;
    }

    findOne(id: number) {
        return this.datasourceService
            .getWorkshops()
            .find((workshop) => workshop.id === id);
    }

    findAll(): Workshop[] {
        return this.datasourceService.getWorkshops();
    }

    update(id: number, updateWorkshop: Workshop) {
        const index = this.datasourceService
            .getWorkshops()
            .findIndex((workshop) => workshop.id === id);
        this.datasourceService.getWorkshops()[index] = updateWorkshop;
        return this.datasourceService.getWorkshops()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
            .getWorkshops()
            .findIndex((workshop) => workshop.id === id);
        this.datasourceService.getWorkshops().splice(index, 1);
        return HttpStatus.OK;
    }
}
