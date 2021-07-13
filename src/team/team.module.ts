import { Module } from '@nestjs/common';
import { teamProviders } from './team.providers';
import { TeamService } from './team.service';

@Module({
    providers: [
        ...teamProviders,
        TeamService
    ],
    exports: [TeamService]
})
export class TeamModule {}
