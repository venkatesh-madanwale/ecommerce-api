import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {mongooseOptions} from './config/mongoose.config'; // Import mongooseOptions from mongoose.config.ts
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!, mongooseOptions),
    UsersModule,
    AuthModule,
    // UserService,
  ],
  controllers : [AppController],
  providers: [AppService],
})
export class AppModule {}
