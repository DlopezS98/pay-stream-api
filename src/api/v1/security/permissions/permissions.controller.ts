import { Controller, Get } from '@nestjs/common';

@Controller()
export default class PermissionsController {
  @Get()
  get(): Promise<string> {
    return Promise.resolve('(PermissionsController): Hello World!');
  }
}
