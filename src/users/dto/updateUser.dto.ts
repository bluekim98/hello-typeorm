import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "./createUser.dto";

export class UpdateUserDto {
    
    @IsEmail() @IsNotEmpty()
    email?: string;

    name?: string;

    nickname?: string;
}