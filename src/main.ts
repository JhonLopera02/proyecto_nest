import { NestFactory } from '@nestjs/core';

import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });


  const swaggerConfig = new DocumentBuilder()

.setTitle('NestJS Example API')
.setDescription(
  'API de ejemplo para entrenamiento de nestjs.',

)
.setVersion('1.0.0')
.build();


const documentFactory= ()=> 
  SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );


  SwaggerModule.setup(
    'api',
    app,
    documentFactory,
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();




