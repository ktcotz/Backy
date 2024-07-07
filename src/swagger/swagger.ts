import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('Backy API')
  .setDescription('API for learning purpose.')
  .setVersion('1.0')
  .build();
