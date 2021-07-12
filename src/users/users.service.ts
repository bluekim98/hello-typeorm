import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private userRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({where: {email}, relations: ["team"]});
    }

    async save(createUserDto: CreateUserDto): Promise<User> {
        const user: User = User.createEntity(createUserDto);
        return this.userRepository.save(user);
    }

    async clear(): Promise<void> {
        this.userRepository.clear();
    }
}
