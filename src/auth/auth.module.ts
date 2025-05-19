import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.contoller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";



@Module({
    imports: [UsersModule, JwtModule.registerAsync({
        imports : [ConfigModule],
        inject: [ConfigService],
        useFactory: async (ConfigService: ConfigService) => {
            return {
                secret: ConfigService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: "1d"
                }
            };
        }

    })],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}