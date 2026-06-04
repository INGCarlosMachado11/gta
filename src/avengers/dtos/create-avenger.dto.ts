export class CreateAvengerDto{
    constructor(
        public name: string,
        public status: boolean = true,
        public description?: string,
    ){}

    static validate( data: { [key: string]: any } ): [string | undefined, CreateAvengerDto | undefined]{
        const { name, description, status } = data

        if(!name) return ["Missing name", undefined];
        if(description && description.length < 4) return ["Description too short", undefined];

        return [undefined, new CreateAvengerDto(name, status, description)]
    }
}