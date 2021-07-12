import { Team } from "../team/team.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";

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

    static createEntity(createUserDto: CreateUserDto): User {
        const user: User = new User();
        user.email = createUserDto.email;
        user.name = createUserDto.name;
        user.nickname = createUserDto.nickname;
        user.team = Team.getTeamById(createUserDto.teamId);
        return user;
    }
}