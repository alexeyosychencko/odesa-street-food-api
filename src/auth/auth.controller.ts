import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registration(@Body() dto: CreateUserDto) {
    const oldUser = await this.authService.findUser(dto.email);
    if (oldUser) {
      throw new BadRequestException('User allready exest');
    }
    const user = await this.authService.registration(dto);
    // TODO: return token
    return user;
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto);
  }
}
