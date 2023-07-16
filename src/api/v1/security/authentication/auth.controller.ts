import { Controller, Get } from '@nestjs/common';

@Controller('authentication')
export default class AuthenticationController {
  @Get()
  get(): Promise<string> {
    return Promise.resolve('(AuthController): Hello World!');
  }
}
