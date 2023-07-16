import AuthenticationProvider from './authentication.provider';

export enum SecurityProviderType {
  AuthService = '@Application/Security/Auth/IAuthenticationService',
  PermissionsService = '@Application/Security/Permissions/IPermissionsService',
}

export default class SecurityProviders {
  static Authentication: typeof AuthenticationProvider = AuthenticationProvider;
}
