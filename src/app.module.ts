import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';

@Module({
  imports: [DatabaseModule, UsersModule, TeamModule],
  controllers: [AppController],
  providers: [AppService, TeamService],
})
export class AppModule {}
