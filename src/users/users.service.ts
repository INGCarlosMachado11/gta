import { User } from "../common/databases/mongodb/models/user.model";
import { PaginationDto } from "../common/dtos/pagination/pagination.dto";
import { CreateUserDto } from "./dtos/create-user.dto";

export class UsersService {
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await User.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
      });
      if (!user) {
        throw new Error("Error al crear un usuario");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async findAll( paginatioDto: PaginationDto ) {

    const { limit = 10, page = 1 } = paginatioDto;

    const users = await User.find()
    .skip(( page - 1 ) * limit)
    .limit(limit)
    
    const total = await User.countDocuments();

    const lastPage = Math.ceil( total / limit );

    return {
      data: users,
      meta: {
        total,
        lastPage,
        page,
        limit
      }
    }
  }
}
