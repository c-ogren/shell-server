import type { FastifyInstance } from "fastify";
import { getTestMessageHandler } from "../controllers/testController";

export const testRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/ping", getTestMessageHandler);
}
