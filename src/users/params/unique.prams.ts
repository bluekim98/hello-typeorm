import { IsEmail, IsNotEmpty } from "class-validator";

export class UniquePramsDto {
    @IsEmail() @IsNotEmpty()
    email: 'string'
}