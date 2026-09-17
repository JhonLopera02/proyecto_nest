import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthModule } from './health/health.module.js';
import { BrandModule } from './brand/brand.module.js';
import { CarsModule } from './cars/cars.module.js';
import { Brand } from './brand/entities/brand.entity.js';
import { Car } from './cars/entities/car.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

export const { ObserveModule, ObserveInstrument } = createObserveModule();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'pepe',
      entities: [Brand, Car],
      synchronize: true,
    }),
    BrandModule,
    CarsModule,
    HealthModule,
  ],
})
export class AppModule {}


