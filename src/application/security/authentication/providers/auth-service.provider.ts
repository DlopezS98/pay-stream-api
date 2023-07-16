import { Provider } from '@nestjs/common';

// import IAuthenticationService from '../authentication/interfaces/authentication-service.interface';
import AuthenticationService from '../services/authentication.service';

export default class AuthServiceProvider {
  static key: symbol = Symbol.for('@Application/IAuthenticationService');

  static get(): Provider {
    return { provide: this.key, useClass: AuthenticationService };
  }
}
