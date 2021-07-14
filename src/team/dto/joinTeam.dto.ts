import { User } from "../../users/user.entity";

export class JoinTeamDto {
    teamId: number;
    user: User;

    constructor({teamId, user}){
        this.teamId = teamId;
        this.user = user;
    }
}