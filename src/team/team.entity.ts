import { User } from "../users/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { JoinTeamDto } from "./dto/joinTeam.dto";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @OneToMany(() => User, user => user.team)
    users: User[];

    
    async joinTeam(joinTeamDto: JoinTeamDto): Promise<void> {
        const _mapper = {
            1: 'Business',
            2: 'Developer',
        }

        const title = _mapper[joinTeamDto.teamId];
        if(!title) return

        this.id = joinTeamDto.teamId;
        this.title = title;
        joinTeamDto.user.team = this

    }

}