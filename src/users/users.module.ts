import { Module } from '@nestjs/common';
import { TeamModule } from '../team/team.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TeamModule],
  providers: [
    ...usersProviders,
    UsersService
  ],
  controllers: [UsersController],
  exports: [UsersService, 'USERS_REPOSITORY']
})
export class UsersModule {}
