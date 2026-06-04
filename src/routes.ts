import { Router } from "express";
import { HerosRoutes } from "./heros/heros.route";
import { AvengersRoute } from "./avengers/avenger.route";

export class AppRoutes {
  static get route(): Router {
    const route = Router();

    route.use("/heros", HerosRoutes.route);
    route.use("/avengers", AvengersRoute.route);

    return route;
  }
}
