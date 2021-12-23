/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Categories } from './module/categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    })
  ]
})
export class AppModule {}
