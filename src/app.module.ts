import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TeamModule } from './team/team.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UsersModule, TeamModule],
})
export class AppModule {}
