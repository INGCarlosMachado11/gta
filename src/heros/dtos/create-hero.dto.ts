export class CreateHeroDto{
    constructor(
        public name: string,
        public power: number,
        public canFly: boolean = false,
    ){}

    static validate(data: { [key: string]: any }): [string | undefined, CreateHeroDto | undefined]{
        const { name, power, canFly } = data

        if(!name) return ["Mising name", undefined];
        if(!power) return ["Mising power", undefined];
        // if(!canFly) return ["Mising canFly", undefined];

        return [undefined, new CreateHeroDto(name, power, canFly)]
    }
}