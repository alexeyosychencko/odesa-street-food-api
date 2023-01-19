import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async registration(@Body() dto: CreateUserDto) {
    //
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    //
  }
}
