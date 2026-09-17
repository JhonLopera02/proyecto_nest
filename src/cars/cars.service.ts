// src/cars/cars.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity.js';
import { CreateCarDto } from './dto/create-car.dto.js';
import { UpdateCarDto } from './dto/update-car.dto.js';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}

  create(createCarDto: CreateCarDto) {
    const car = this.carsRepository.create({
      ...createCarDto,
      brand: { id: createCarDto.brandId } as any,
    });
    return this.carsRepository.save(car);
  }

  findAll() {
    return this.carsRepository.find({ relations: {brand: true} });
  }

  async findOne(id: number) {
    const car = await this.carsRepository.findOne({
      where: { id },
      relations: {brand: true},
    });
    if (!car) throw new NotFoundException(`Car ${id} no encontrado`);
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.findOne(id);
    const { brandId, ...rest } = updateCarDto;
    Object.assign(car, rest);
    if (brandId) car.brand = { id: brandId } as any;
    return this.carsRepository.save(car);
  }

  async remove(id: number) {
    const car = await this.findOne(id);
    return this.carsRepository.remove(car);
  }
}