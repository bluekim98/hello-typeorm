export class CreateUserDto{
    private _eamil: string;
    private _name: string;
    private _nickname: string;
    private _teamId: number;

    public get email(): string {
        return this._eamil;
    }

    public set email(email: string) {
        this._eamil = email;
    }

    public get name(): string {
        return this._name
    }

    public set name(name: string) {
        this._name = name;
    }

    public get nickname(): string {
        return this._nickname;
    }

    public set nickname(nickname: string) {
        this._nickname = nickname;
    }

    public get teamId(): number {
        return this._teamId;
    }

    public set teamId(teamId: number) {
        this._teamId = teamId;
    }
}