import { Provider } from '@nestjs/common';

import AuthServiceProvider from '../authentication/providers/auth-service.provider';

// export enum SecurityProviderType {
//   AuthService = '@Application/Security/Auth/IAuthenticationService',
//   PermissionsService = '@Application/Security/Permissions/IPermissionsService',
// }

export default class SecurityProviders {
  static AuthService: typeof AuthServiceProvider = AuthServiceProvider;

  static get(): Provider[] {
    return [this.AuthService.get()];
  }
}
