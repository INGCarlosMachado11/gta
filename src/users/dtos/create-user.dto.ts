export class CreateUserDto{
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ){}

    static validate(data: { [key: string]: any }): [string | undefined, CreateUserDto | undefined]{
        const { name, email, password } = data

        if(!name) return ["Mising name", undefined];
        if(!email) return ["Mising email", undefined];
        if(!password) return ["Mising password id", undefined];

        return [undefined, new CreateUserDto(name, email, password)]
    }
}
