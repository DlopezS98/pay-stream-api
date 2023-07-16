import { Module } from '@nestjs/common';

import AuthServiceProvider from './providers/auth-service.provider';

@Module({ providers: [AuthServiceProvider.get()], exports: [AuthServiceProvider.get()] })
export default class AuthenticationModule {}
