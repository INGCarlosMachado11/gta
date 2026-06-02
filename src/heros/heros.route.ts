import { Router } from "express";
import { HerosController } from "./heros.controller";
import { HerosService } from "./heros.service";

export class HerosRoutes {
  static get route(): Router {
    const route = Router();
    const herosService = new HerosService()
    const herosController = new HerosController(herosService)

    route.post("/", herosController.create);
    route.get("/", herosController.findAll);
    route.get("/:id", herosController.findOne);
    route.patch("/:id", herosController.update);
    route.delete("/:id", herosController.delete);

    return route;
  }
}
