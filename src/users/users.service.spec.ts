import { Test, TestingModule } from '@nestjs/testing';
import { Team } from '../team/team.entity';
import { DatabaseModule } from '../database/database.module';
import { User } from './user.entity';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { TeamModule } from '../team/team.module';
import { CreateUserDto } from './dto/createUser.dto';

describe('UsersService', () => {
  let service: UsersService;
  let createUserDto: CreateUserDto;


  beforeEach(async () => {
    try {
      const module: TestingModule = await Test.createTestingModule({
        imports: [DatabaseModule, TeamModule],
        providers: [
          ...usersProviders,
          UsersService
        ],
      }).compile();
      service = module.get<UsersService>(UsersService);
    } catch (error) {
      
    }
  });
  

  beforeEach(async() => {
    await service.clear();
    
    createUserDto = new CreateUserDto();
    createUserDto.email = 'dlwlrma@email.com';
    createUserDto.name = '아이유';
    createUserDto.nickname = 'dlwlrma';
    createUserDto.teamId = 1;

    await service.save(createUserDto);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be saved one user', async () => {
    const users: User[] = await service.findAll();
    expect(users[0]).toBeInstanceOf(User);
    expect(users.length).toBeGreaterThanOrEqual(1);
  });

  it('should be returned a intended user', async () => {
    const findedUser: User = await service.findByEmail(createUserDto.email);
    expect(findedUser.email).toBe(createUserDto.email);
    expect(findedUser.team.id).toBe(createUserDto.teamId);
  });

  /*
  it('just time test', async () => {
    jest.setTimeout(10000000);

    for(let i = 0; i < 30000; i++) {
      let userDto: CreateUserDto = new CreateUserDto();
      userDto.email = `test${i}@email.com`;
      userDto.name = `test${i}`
      userDto.nickname = `nickname${i}`;
      userDto.teamId = 1
      await service.save(userDto);
    }

    const title = '30,000 performance tests';
    console.time(title);
    const users: User[] = await service.findAll();
    console.timeEnd(title);
  })
  */
});
