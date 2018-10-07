import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import {UserDto} from 'dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    public readonly userService : UserService
  ){

  }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() userDto: UserDto){
      return await this.userService.create(userDto);
    }

    @Get()
    root(): any {
      return {hello : "Hello Motherfucker"};

    }

    @Put()
    @UsePipes(new ValidationPipe({ transform: true }))
    async update(@Body() userDto: UserDto){
    return await this.userService.update(UserDto);  
  }
}
