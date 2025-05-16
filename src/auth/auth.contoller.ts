import { Module } from '@nestjs/common';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller("auth")
export class AuthController{
    constructor(private authService:AuthService){}

    @Post('register')
    register(@Body() dto:RegisterDto){
        return this.authService.register(dto)
        }
}