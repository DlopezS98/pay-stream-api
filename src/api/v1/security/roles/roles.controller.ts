import { Controller, Get } from '@nestjs/common';

@Controller()
export default class RolesController {
  @Get()
  get(): Promise<string> {
    return Promise.resolve('(RolesController) Hello World!');
  }
}
