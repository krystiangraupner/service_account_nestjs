import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {UserDto} from 'dto/user.dto';

@Injectable()
export class UserService {
  update(userDto: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(userDTO : UserDto){
    const userEntity : User = Object.assign(new User(), userDTO);
    return this.userRepository.save(userEntity);
  }
}
