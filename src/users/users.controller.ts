import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UniquePramsDto } from './params/unique.prams';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get(':email')
    async getUserInfo(@Param() uniquePramsDto: UniquePramsDto): Promise<User> {
        return await this.usersService.findByEmail(uniquePramsDto.email);
        
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.save(createUserDto);
    }

    @Put()
    async updateUser(@Query() updateUserDto: UpdateUserDto) {
        return await this.usersService.update(updateUserDto);
    }
}
