import { Request, Response } from "express";
import { Hero } from "../common/databases/mongodb/models/hero.model";
import { CreateHeroDto } from "./dtos/create-hero.dto";

export class HerosService{

    async create( createHeroDto: CreateHeroDto ){
        const hero = Hero.create(createHeroDto);

        return hero
    }

    async update(){
        console.log("ASDHASDH")
    }

    async delete(){
        console.log("ASDHASDH")
    }

    async findOne(){
        console.log("ASDHASDH")
    }

    async findAll(){
        return Hero.find().populate("avenger", "_id name description")
    }
}