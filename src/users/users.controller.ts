import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get(':email')
    async getUserInfo(@Param('email') email): Promise<User> {
        return await this.usersService.findByEmail(email);
        
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.save(createUserDto);
    }
}
