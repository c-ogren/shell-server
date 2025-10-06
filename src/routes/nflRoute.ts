import { FastifyInstance } from "fastify";
import { NFLController } from "../controllers/nflController";

const controller = new NFLController();

export const nflRoutes = async (fastify: FastifyInstance) => {
    fastify.get("/nfl/player/:id", controller.getPlayerById.bind(controller))
}