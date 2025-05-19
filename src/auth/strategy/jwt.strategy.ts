import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";


@Injectable() // This class is used to create a JWT strategy
// Create a JWT strategy
// Setup the guard using passport
// Add @UseGuards to secure the routes
// Validate the JWT token
// @req() or @user() to get the user object
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private configService: ConfigService) {

        const jwtSecret = configService.get<string>("JWT_SECRET");
        if (!jwtSecret) {
            throw new Error("JWT_SECRET not available environment variables");
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret
        })
        
        
    }
    async validate(payload:any){
        return{
            email: payload.emailid, role: payload.role 
        }
    }
}