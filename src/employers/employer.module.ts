import { Module } from '@nestjs/common';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { DataSourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [EmployerController],
  providers: [EmployerService],
  imports: [DataSourceModule],
})
export class EmployerModule {}
