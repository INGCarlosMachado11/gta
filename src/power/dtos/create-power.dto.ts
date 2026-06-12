export class CreatePowerDto{
    constructor(
        public name: string,
        public damage: number,
        public hero: string,
    ){}

    static validate(data: { [key: string]: any }): [string | undefined, CreatePowerDto | undefined]{
        const { name, damage, hero } = data

        if(!name) return ["Mising name", undefined];
        if(isNaN(+damage)) return ["Damage must be a number", undefined];
        if(!damage) return ["Mising damage", undefined];
        if( damage < 0 && damage > 100 ) return ["The damage must be container between 1 and 100", undefined];
        if(!hero) return ["Mising hero", undefined];

        return [undefined, new CreatePowerDto(name, damage, hero,)]
    }
}