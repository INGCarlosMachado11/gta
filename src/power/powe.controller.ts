
import { Powerservice } from './power.service';
import { CreatePowerDto } from './dtos/create-power.dto';
import { Request, Response } from 'express';

export class PowerController{
    constructor(private readonly powerservice: Powerservice) {}

    create = (req: Request, res: Response) => {
      const [error, createPowerDto] = CreatePowerDto.validate(req.body);
      if (error) {
        res.status(400).json({ meesage: error, status: 400});
        return;
    }
    
    this.powerservice
      .create(createPowerDto!)
      .then((power) => res.status(201).json(power))
      .catch((err) =>
        res.status(500).json({meesage: "Internal Server Error", status: 500}),
      );

    };
    findAll = (req: Request, res: Response) => {
        
        this.powerservice
          .findAll()
          .then((power) => res.status(200).json(power))
          .catch((err) =>
            res.status(500).json({ meesage: "Internal Server Error", status: 500 }),
          );
      };
    


}


