import { Module } from '@nestjs/common';
import { TeamModule } from '../team/team.module';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule, TeamModule],
  providers: [
    ...usersProviders,
    UsersService
  ],
})
export class UsersModule {}
