import { Module } from '@nestjs/common';

import AppController from './app.controller';
import SecurityModule from './v1/security/security.module';

@Module({
  imports: [SecurityModule],
  controllers: [AppController],
  providers: [],
})
export default class AppModule {}
