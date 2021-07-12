import { User } from "../users/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @OneToMany(() => User, user => user.team)
    users: User[];

    static getTeamById(id: number): Team {
        const _mapper = {
            1: 'Business',
            2: 'Developer',
        }

        const title = _mapper[id];
        if(!title) {
            return null;
        }

        const team: Team = new Team();
        team.id = id;
        team.title = title;
        return team;
    }

}