import { Controller, Get, Param } from '@nestjs/common';
import { FindUsersPramsDto } from './params/find-users.prams';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {

    constructor(private teamService: TeamService){}

    @Get('users/:id')
    async findUsersOnTeam(@Param() findUsersPramsDto: FindUsersPramsDto) {
        return await this.teamService.findUsersOnTeamByTeamId(findUsersPramsDto.id);
    }
}
