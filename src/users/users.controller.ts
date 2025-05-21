import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { User } from './schema/user.schema';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: Partial<User>) {
    return this.userService.create(createUserDto);
  }

  @Get('by-email')
  async getUserByEmail(@Query('emailid') emailid: string) {
    const user = await this.userService.findByEmail(emailid);
    if (!user) {
      throw new NotFoundException(`User with email ${emailid} not found`);
    }
    return user;
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateData: Partial<User>,
  ) {
    return this.userService.updateUser(userId, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
