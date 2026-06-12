import { Power } from '../common/databases/mongodb/models/power.model';
import { CreatePowerDto } from './dtos/create-power.dto';

export class Powerservice{

async create(createPowerDto: CreatePowerDto){
    const { name, damage } = createPowerDto
    try{
        const power = await Power.create({
            name,
            damage,
        })
        if(!power) throw new Error("UPPS UN error alocadooooooo")

        return power;
    } catch (error){
      throw error;
    }

} 
findAll(){
    try {
        return Power.find();
    }catch (error) {
    throw error
    }
    
}

}