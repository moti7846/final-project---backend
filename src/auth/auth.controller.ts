import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/DTO/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)

  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }

  @Post('register')
  signUp(@Body() signUpDto: UserDTO) {
    return this.authService.signUp(signUpDto.name, signUpDto.role, signUpDto.password);
  }
}