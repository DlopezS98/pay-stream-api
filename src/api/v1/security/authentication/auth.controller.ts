import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import LoginDto, { LoginResponseDto } from 'src/application/security/authentication/dtos/login.dto';
import IAuthenticationService from 'src/application/security/authentication/interfaces/authentication-service.interface';
import SecurityProviders from 'src/application/security/providers/providers';

@Controller('authentication')
export default class AuthenticationController {
  constructor(@Inject(SecurityProviders.AuthService.key) private readonly authService: IAuthenticationService) {}

  @Get()
  get(): Promise<string> {
    return Promise.resolve('(AuthController): Hello World!');
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.authenticate(loginDto);
  }
}
