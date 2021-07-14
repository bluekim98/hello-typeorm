import { Team } from "../team/team.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { JoinTeamDto } from "../team/dto/joinTeam.dto";
import user from "fixture/user";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    name: string;

    @Column()
    nickname: string;

    @ManyToOne(() => Team, team => team.users)
    team: Team;

    @Column({default: true})
    isActive: boolean

    async singIn(createUserDto: CreateUserDto): Promise<void> {
        this.email = createUserDto.email;
        this.name = createUserDto.name;
        this.nickname = createUserDto.nickname;

        const team: Team = new Team();
        await team.joinTeam(new JoinTeamDto({
            teamId: 1,
            user: this
        }));
        
    }

}