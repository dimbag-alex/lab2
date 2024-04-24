import { Module } from '@nestjs/common'
import { ClientsController } from './client.controller';
import { ClientService } from './client.service';
import { DataSourceModule } from 'src/datasource/datasource.module';

@Module ({
    controllers:[ClientsController],
    providers: [ClientService],
    imports:[DataSourceModule],
    
})
export class ClientModule {}