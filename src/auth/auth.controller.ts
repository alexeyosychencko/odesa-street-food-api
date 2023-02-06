import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { LocalAuthGuard } from 'src/strategies/local.strategy';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registration(@Body(new ValidationPipe()) dto: CreateUserDto) {
    const user = await this.authService.registration(dto);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
