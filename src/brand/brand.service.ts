import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto.js';
import { UpdateBrandDto } from './dto/update-brand.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity.js';
import { create } from 'domain';

@Injectable()
export class BrandService {


  constructor{
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    
  }{}

  async create(CreateBrandDto: CreateBrandDto){
    try{
      const temporalBrand = this.brand.create(CreateBrandDto);
      const newBrand = await this.brandRepository.save(temporalBrand);

      return newBrand;
    } catch (error:any){

      const {code,detail}= error;

      if(code === '23505'){
        throw new BadRequestException(detail);
      }
    }
  }
  
  findAll() {
    return `This action returns all brand`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
