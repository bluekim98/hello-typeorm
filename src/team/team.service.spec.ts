import { Test, TestingModule } from '@nestjs/testing';
import { maxDate } from 'class-validator';
import { DatabaseModule } from '../database/database.module';
import { teamProviders } from './team.providers';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let module: TestingModule
  let service: TeamService;


  beforeAll(async () => {
    module = await Test.createTestingModule({
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


  afterAll(async () => {
    await module.close();
  })

});
