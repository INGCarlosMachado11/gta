import { Router } from "express";
import { AvengersController } from "./avengers.controller";
import { AvengersService } from "./avengers.service";

export class AvengersRoute{
    static get route(): Router{
        const route = Router();
        const avengerService = new AvengersService() 
        const avengerController = new AvengersController(avengerService);

        route.post("/", avengerController.create);
        route.get("/", avengerController.findAll);

        return route
    }
}