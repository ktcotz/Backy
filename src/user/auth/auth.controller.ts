import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDTO, SignupDTO } from '../dtos/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }

  @Post('/signin')
  signin(@Body() signinDTO: SignInDTO) {
    return this.authService.signin(signinDTO);
  }
}
