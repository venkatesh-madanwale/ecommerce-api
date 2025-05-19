import { Module, UnauthorizedException } from '@nestjs/common';
import { Injectable, ConflictException } from '@nestjs/common';
import { UserService } from 'src/users/users.service'
import { RegisterDto } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt'
import { from } from 'rxjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    // login(dto: LoginDto) {
    //     throw new Error('Method not implemented.');
    // }
    constructor(private userService: UserService, private jwtService: JwtService) { }
//userService is dependency injection for authentication service
    async register(registerDto: RegisterDto) {
        const { emailid, name, phno, pwd } = registerDto;
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

    async login(loginDto: LoginDto) {
        const { emailid, pwd } = loginDto;
        const user = await this.userService.findByEmail(emailid);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials')
        }
        const isPasswordValid = await bcrypt.compare(pwd, user.pwd);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials')
        }

        const payload = { email: user?.emailid, role: user.role }
        const token = this.jwtService.sign({ payload });

        return { "msg": "Login Successful", "email": user.emailid, "name": user.name, "token": token };
    }

}
