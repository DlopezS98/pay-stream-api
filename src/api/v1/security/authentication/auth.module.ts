import { Module } from '@nestjs/common';

import ApplicationAuthenticationModule from 'src/application/security/authentication/auth.module';

import AuthenticationController from './auth.controller';

@Module({
  imports: [ApplicationAuthenticationModule],
  controllers: [AuthenticationController],
})
export default class AuthenticationModule {}
