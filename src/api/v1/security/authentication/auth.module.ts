import { Module } from '@nestjs/common';

// import SecurityProviders from 'src/application/security/providers/providers';

import AuthenticationController from './auth.controller';

@Module({
  imports: [],
  controllers: [AuthenticationController],
  // providers: [...SecurityProviders.get()],
})
export default class AuthenticationModule {}
