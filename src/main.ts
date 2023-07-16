import { NestFactory } from '@nestjs/core';

import AppModule from './api/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}

bootstrap().catch(console.error);
