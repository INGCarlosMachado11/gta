import { Router } from "express";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

export class UsersRoute {

    static get route(): Router{
        const route = Router();
        const usersService = new UsersService()
        const usersController = new UsersController(usersService);

        route.post("/", usersController.create)
        route.get("/", usersController.findAll)

        return route
    }

}