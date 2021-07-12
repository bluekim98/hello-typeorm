import { Connection } from "typeorm";
import { Team } from "./team.entity";


export const teamProviders = [
    {
        provide: "TEAM_REPOSITORY",
        useFactory: (connection: Connection) => connection.getRepository(Team),
        inject: ["DATABASE_CONNECTION"]
    }
];