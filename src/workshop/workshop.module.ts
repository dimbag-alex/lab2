import { Module } from '@nestjs/common';
import { WorkshopController } from './workshop.controller';
import { WorkshopService } from './workshop.service';
import { DataSourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [WorkshopController],
  providers: [WorkshopService],
  imports: [DataSourceModule],
})
export class WorkShopModule {}