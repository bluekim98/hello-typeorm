import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { teamProviders } from './team.providers';
import { TeamService } from './team.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...teamProviders,
        TeamService
    ],
    exports: [TeamService]
})
export class TeamModule {}
