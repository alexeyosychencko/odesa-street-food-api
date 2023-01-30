import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/strategies/jwt.strategy';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  async get(@Param('email') email: string) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      throw new HttpException('Not found user.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.userService.delete(id);
    if (!deleted) {
      throw new HttpException('Not found user.', HttpStatus.NOT_FOUND);
    }
  }
}
