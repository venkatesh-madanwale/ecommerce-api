import { Module } from '@nestjs/common';
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { User, UserDocument, UserSchema } from './schema/user.schema';
import { AuthService } from 'src/auth/auth.service';
import {Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){
    }

    async findByEmail(emailid:string ):Promise<User | null >{
        return this.userModel.findOne({ emailid });
    }
    async create(data:Partial<User>):Promise<User>{
        const newUser = new this.userModel(data)
        return newUser.save()
    }
}

export class create{

}