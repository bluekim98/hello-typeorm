import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { TeamController } from './team.controller';
import { TeamModule } from './team.module';

describe('TeamController', () => {
  let controller: TeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TeamModule],
      controllers: [TeamController],
    }).compile();

    controller = module.get<TeamController>(TeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
