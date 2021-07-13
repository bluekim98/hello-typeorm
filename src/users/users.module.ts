import { Module } from '@nestjs/common';
import { TeamModule } from '../team/team.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [TeamModule],
  providers: [
    ...usersProviders,
    UsersService
  ],
})
export class UsersModule {}
