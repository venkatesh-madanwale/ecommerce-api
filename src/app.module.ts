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
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { ProductsModule } from './products/products.module';
import { TempModule } from './temp/temp.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!, mongooseOptions),
    ProductsModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    TempModule,
    CategoryModule,
    // UserService,
  ],
  controllers : [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
