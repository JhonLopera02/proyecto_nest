import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { CreateHealthDto } from './dto/create-health.dto.js';
import { UpdateHealthDto } from './dto/update-health.dto.js';
import { ApiOkResponse, ApiTags, ApiNotFoundResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  @ApiNotFoundResponse({
    description: 'No se encuentra informacion del servicio',
    example: {
      statusCode: 404,
      message: 'health information not found',
      error: 'not found',
    },
  })
  findAll() {
    return this.healthService.findAll();
  }

  
}