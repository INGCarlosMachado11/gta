import { Request, Response } from "express";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";
import { PaginationDto } from "../common/dtos/pagination/pagination.dto";

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  create = (req: Request, res: Response) => {
    const [error, createUserDto] = CreateUserDto.validate(req.body);
    if (error) {
      res.status(400).json(error);
      return;
    }

    this.usersService
      .create(createUserDto!)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(500).json(err));
  };

  findAll = (req: Request, res: Response) => {
    console.log(req.query)
    const [error, paginationDto] = PaginationDto.validate(req.query)
    if (error) {
      res.status(400).json(error);
      return;
    }
    
    this.usersService
      .findAll(paginationDto!)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err));
  };
}
