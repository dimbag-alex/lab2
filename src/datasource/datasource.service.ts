import { Injectable } from '@nestjs/common';
import { Client } from 'src/clients/client.entity';
import { Workshop } from 'src/workshop/workshop.entity';
import { Employer } from 'src/employers/employer.entity';

@Injectable()
export class DataSourceService {
    private clients: Client[] = []
    private workshops: Workshop[] = []
    private employers: Employer[] = []

    getClients (): Client[]{
        return this.clients;
    }

    getWorkshops(): Workshop[] {
        return this.workshops;
    }

    getEmployers(): Employer[] {
        return this.employers;
    }
}
