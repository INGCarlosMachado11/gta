export class CreateHeroDto{
    constructor(
        public name: string,
        public power: number,
        public avenger: string,
        public canFly: boolean = false,
    ){}

    static validate(data: { [key: string]: any }): [string | undefined, CreateHeroDto | undefined]{
        const { name, power, canFly, avenger } = data

        if(!name) return ["Mising name", undefined];
        if(!power) return ["Mising power", undefined];
        if(!avenger) return ["Mising avenger id", undefined];

        return [undefined, new CreateHeroDto(name, power, avenger, canFly)]
    }
}