import { Module } from '@nestjs/common';
import { WorkShop } from './workshop/workshop.module';


@Module({
  imports: [WorkShop]
})
export class AppModule {}

