import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { TeamModule } from '../team/team.module';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersController } from './users.controller';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
import user from "../../fixture/user";


describe('UsersController', () => {
  let userDto: CreateUserDto;
  let controller: UsersController;

  beforeEach(async () => {
    try {
      const module: TestingModule = await Test.createTestingModule({
        imports: [DatabaseModule, TeamModule, UsersModule],
        controllers: [UsersController, UsersService],
      }).compile();
  
      controller = module.get<UsersController>(UsersController);
    } catch (error) {
      
    }
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
