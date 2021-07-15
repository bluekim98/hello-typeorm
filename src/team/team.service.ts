import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
    constructor(
        @Inject("TEAM_REPOSITORY")
        private teamRepository: Repository<Team>
    ){}

    async save(team: Team): Promise<Team> {
        return await this.teamRepository.save(team);
    }

    async findById(id: number): Promise<Team> {
        return await this.teamRepository.findOne(id);
    }

    async findByTitle(title: string): Promise<Team> {
        return await this.teamRepository.findOne({where: {title}});
    }

    async findUsersOnTeamByTeamId(id: number): Promise<User[]> {
        const findedTeam: Team = await this.teamRepository.findOne({
            where: {id},
            relations: ["users"]
        });

        if(!findedTeam) return;
        
        return findedTeam.users;
    }
}
