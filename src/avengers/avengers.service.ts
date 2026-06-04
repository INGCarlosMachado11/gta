import { Avenger } from "../common/databases/mongodb/models/avenger.model";
import { CreateAvengerDto } from "./dtos/create-avenger.dto";

export class AvengersService {
  async create(createAvengerDto: CreateAvengerDto) {
    const { name, status, description } = createAvengerDto;
    try {
      const avenger = await Avenger.create({
        name,
        status,
      });
      if (!avenger) throw new Error("Error inesperado");

      return avenger;
    } catch (error) {
      throw error;
    }
  }

  findAll(){
    try {
      return Avenger.find();
    } catch (error) {
      throw error
    }
  }
}
