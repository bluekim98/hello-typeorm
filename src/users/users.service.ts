import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { Team } from 'src/team/team.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private userRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string, select?: (keyof User)[]): Promise<User> {
        return this.userRepository.findOne({
            select,
            where: {email, isActive: true}, 
            relations: ["team"]
        });
    }

    async save(createUserDto: CreateUserDto): Promise<User> {
        const user: User = new User();
        await user.singIn(createUserDto);
        return await this.userRepository.save(user);
    }

    async update(updateUserDto: UpdateUserDto): Promise<void> {
        const findedUser: User = await this.findByEmail(updateUserDto.email, ['id']);
        if(!findedUser) return;

        let partialEntity: UpdateUserDto = await this.generatePartialEntity(updateUserDto);
        await this.userRepository.update({id: findedUser.id}, partialEntity);
    }

    private async generatePartialEntity(updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
        let partialEntity: UpdateUserDto = new UpdateUserDto();
        for(let key of Object.keys(updateUserDto)) {
            let value = updateUserDto[key];
            if(value) {
                partialEntity[key] = value;
            }
        }
        return partialEntity;
    }

    async clear(): Promise<void> {
        this.userRepository.clear();
    }
}
