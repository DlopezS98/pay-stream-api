import { Provider } from '@nestjs/common';

import { SecurityProviderType } from './providers';
import AuthenticationService from '../authentication/services/authentication.service';

export default class AuthenticationProvider {
  static key: SecurityProviderType = SecurityProviderType.AuthService;

  static getOptions(): Provider {
    return { provide: this.key, useClass: AuthenticationService };
  }
}
