import { Request, Response } from "express";
import { HerosService } from "./heros.service";
import { CreateHeroDto } from "./dtos/create-hero.dto";

export class HerosController{
    
    constructor(private readonly herosService: HerosService){}

    create = async(req: Request, res: Response)=>{
        const [error, createHeroDto] = CreateHeroDto.validate(req.body);
        if(error){
            res.status(400).json(error)
            return
        }

        this.herosService.create(createHeroDto!)
        .then((heros)=>res.status(200).json(heros))
        .catch((err)=>res.status(500).json(err))
    }

    update = async(req: Request, res: Response)=>{
        res.json({message: "ASDASDASDASD"})
    }

    delete = async(req: Request, res: Response)=>{
        res.json({message: "ASDASDASDASD"})
    }

    findOne = async(req: Request, res: Response)=>{
        res.json({message: "ASDASDASDASD"})
    }

    findAll = async(req: Request, res: Response)=>{
        this.herosService.findAll()
        .then((heros)=>res.status(200).json(heros))
        .catch((err)=>res.status(500).json(err))
    }
}