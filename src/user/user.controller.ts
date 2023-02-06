import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { JwtAuthGuard } from 'src/strategies/jwt.strategy';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get(':email')
  async get(@Param('email') email: string) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      throw new HttpException('Not found user.', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @UseGuards(JwtAuthGuard)
  @Delete(':email')
  async delete(@Param('email') email: string) {
    const deleted = await this.userService.delete(email);
    if (!deleted) {
      throw new HttpException('Not found user.', HttpStatus.NOT_FOUND);
    }
  }
}
