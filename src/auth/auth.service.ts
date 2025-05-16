import { Module } from '@nestjs/common';
import { Injectable, ConflictException } from '@nestjs/common';
import { UserService } from 'src/users/users.service'
import { RegisterDto } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt'
import { from } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async register(registerDto: RegisterDto) {
        const { emailid, name,phno, pwd } = registerDto;
        const exisiting_user = await this.userService.findByEmail(emailid);
        if (exisiting_user) {
            throw new ConflictException('Email already exists')
        }
        const hashedPassword = await bcrypt.hash(pwd, 10);

        const user = await this.userService.create({
            emailid,
            name,
            phno,
            pwd: hashedPassword
        });

        return { "msg": "User created Successfully!", "id": user.emailid, "name": user.name };
    }

}
