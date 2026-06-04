import { Request, Response } from "express";
import { AvengersService } from "./avengers.service";
import { CreateAvengerDto } from "./dtos/create-avenger.dto";

export class AvengersController {
  constructor(private readonly avengersService: AvengersService) {}

  create = (req: Request, res: Response) => {
    const [error, createAvengerDto] = CreateAvengerDto.validate(req.body);
    if (error) {
      res.status(400).json({ meesage: error, status: 400 });
      return;
    }

    this.avengersService
      .create(createAvengerDto!)
      .then((avenger) => res.status(201).json(avenger))
      .catch((err) =>
        res.status(500).json({ meesage: "Internal Server Error", status: 500 }),
      );
  };

  findAll = (req: Request, res: Response) => {
    
    this.avengersService
      .findAll()
      .then((avenger) => res.status(200).json(avenger))
      .catch((err) =>
        res.status(500).json({ meesage: "Internal Server Error", status: 500 }),
      );
  };
}
