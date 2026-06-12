import { Router } from "express";
import { PowerController } from './powe.controller';
import { Powerservice } from './power.service';


export class PowerRoute{
    static get route(): Router{
        const route = Router();
        const powerservice = new Powerservice() 
        const powerController = new PowerController(powerservice);

        route.post("/", powerController.create);
        route.get("/", powerController.findAll);

        return route
    }
}


