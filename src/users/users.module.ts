import { Module } from '@nestjs/common';
import {UserService} from './users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './users.controller';
import { UserSchema, User } from './schema/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name:User.name,
            schema:UserSchema
        }])
    ],
    controllers:[UserController],
    providers:[UserService],
    exports: [UserService]
})
export class UsersModule {}
