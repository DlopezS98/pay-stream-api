export default class LoginDto {
  username!: string;
  password!: string;
}

export class LoginResponseDto {
  displayName!: string;
  accessToken!: string;
  refreshToken!: string;
}
