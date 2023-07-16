import LoginDto, { LoginResponseDto } from '../dtos/login.dto';
import IAuthenticationService from '../interfaces/authentication-service.interface';

export default class AuthenticationService implements IAuthenticationService {
  authenticate(loginDto: LoginDto): Promise<LoginResponseDto> {
    console.log('authenticate', loginDto);
    return Promise.resolve({
      accessToken: '1d342472-32a5-5942-ade0-3ce355faba04',
      displayName: 'John Doe',
      refreshToken: 'a67e7106-4402-52c6-97d7-af613080e182',
    });
  }

  register(username: string, password: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  logout(username: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  refreshToken(token: string, refreshToken: string): Promise<[string, string]> {
    throw new Error('Method not implemented.');
  }
}
