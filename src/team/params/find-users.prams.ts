import { IsNotEmpty, IsNumberString } from "class-validator";

export class FindUsersPramsDto {
    @IsNumberString() @IsNotEmpty()
    id: number;
}