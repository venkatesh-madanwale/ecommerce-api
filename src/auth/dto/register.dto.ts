// Data Validation
import { IsEmail, IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';

export class RegisterDto {
    
    // @IsEmail()
    // @IsString()
    // @IsNotEmpty()
    // @MinLength(3)
    emailid :string

    // @IsNotEmpty()
    // @IsString()
    // @MinLength(3)
    name: string;
    
    // @IsNotEmpty()
    // @MinLength(6)
    pwd: string;

    phno:string;
}