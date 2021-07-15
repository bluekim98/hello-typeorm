import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { teamProviders } from './team.providers';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[DatabaseModule],
      providers: [
        ...teamProviders,
        TeamService
      ],
    }).compile();
    service = module.get<TeamService>(TeamService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


});
