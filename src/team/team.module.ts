import { Module } from '@nestjs/common';
import { teamProviders } from './team.providers';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';

@Module({
    controllers: [TeamController],
    providers: [
        ...teamProviders,
        TeamService
    ],
    exports: [TeamService, 'TEAM_REPOSITORY'],
})
export class TeamModule {}
