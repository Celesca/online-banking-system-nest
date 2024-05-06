import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && bcrypt.compare(pass, user.password)) {
  //     return user;
  //   }
  //   return null;
  // }

  async login(user: any) {
    const payload = { username: user.username, sub: user.user_id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
