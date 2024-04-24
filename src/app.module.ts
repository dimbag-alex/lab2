import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { ClientModule } from './clients/client.module';
import { WorkShopModule } from './workshop/workshop.module';
import { EmployerModule } from './employers/employer.module';
import { DataSourceModule } from './datasource/datasource.module';



@Module({
  imports: [ClientModule, WorkShopModule, EmployerModule, DataSourceModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}