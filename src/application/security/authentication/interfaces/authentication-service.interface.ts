import LoginDto, { LoginResponseDto } from '../dtos/login.dto';

export default interface IAuthenticationService {
  authenticate(loginDto: LoginDto): Promise<LoginResponseDto>;
  register(username: string, password: string): Promise<string>;
  logout(username: string): Promise<void>;
  refreshToken(token: string, refreshToken: string): Promise<[string, string]>;
}
