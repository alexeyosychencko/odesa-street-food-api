import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getByEmail(username);
    if (!user) {
      console.log('user not found.');
      return null;
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      console.log('password is incorrect.');
      return null;
    }
    return user;
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
