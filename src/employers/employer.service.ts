import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSourceService } from 'src/datasource/datasource.service';
import { Employer } from './employer.entity';

@Injectable()
export class EmployerService {
    constructor(private readonly datasourceService: DataSourceService) {}

    create(employer: Employer) {
        this.datasourceService.getEmployers().push(employer);
        return employer;
    }

    findOne(id: number) {
        return this.datasourceService
            .getEmployers()
            .find((employer) => employer.id === id);
    }

    findAll(): Employer[] {
        return this.datasourceService.getEmployers();
    }

    update(id: number, updateEmployer: Employer) {
        const index = this.datasourceService
            .getEmployers()
            .findIndex((employer) => employer.id === id);
        this.datasourceService.getEmployers()[index] = updateEmployer;
        return this.datasourceService.getEmployers()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
            .getEmployers()
            .findIndex((employer) => employer.id === id);
        this.datasourceService.getEmployers().splice(index, 1);
        return HttpStatus.OK;
    }
}
