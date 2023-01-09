import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async registration(@Body() dto: RegisterDto) {
    //
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    //
  }
}
