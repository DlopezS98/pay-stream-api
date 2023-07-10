import { Injectable } from '@nestjs/common';

import Environment from '@Config/environment';

@Injectable()
export default class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
