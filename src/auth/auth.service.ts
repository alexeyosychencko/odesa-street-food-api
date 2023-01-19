import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(dto: LoginDto) {
    const user = await this.userService.getByEmail(dto.login);
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Wrong password.',
    });
  }

  async registration(dto: CreateUserDto) {
    const candidate = await this.userService.getByEmail(dto.email);
    if (candidate) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });
    return user;
  }
}
