import { Router } from "express";
import { HerosRoutes } from "./heros/heros.route";

export class AppRoutes{

    static get route(): Router{
        const route = Router();

        route.use("/heros", HerosRoutes.route)

        return route;

    }

}