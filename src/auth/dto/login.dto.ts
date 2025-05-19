// Data Validation
import { IsEmail, IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';

export class LoginDto {
    
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    emailid :string
        
    @IsNotEmpty()
    @MinLength(6)
    pwd: string;
}