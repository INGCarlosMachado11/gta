import { Router } from "express";
import { HerosRoutes } from "./heros/heros.route";
import { AvengersRoute } from "./avengers/avenger.route";
import { UsersRoute } from "./users/users.route";
import { PowerRoute } from "./power/avenger.route";

export class AppRoutes {
  static get route(): Router {
    const route = Router();

    route.use("/heros", HerosRoutes.route);
    route.use("/avengers", AvengersRoute.route);
    route.use("/users", UsersRoute.route);
    route.use("/power", PowerRoute.route)

    return route;
  }
}
