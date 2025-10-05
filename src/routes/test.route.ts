import type { FastifyInstance } from "fastify";
import { getTestMessageHandler } from "../controllers/test.controller";

export default async function testRoutes(fastify: FastifyInstance) {
  fastify.get("/", getTestMessageHandler);
}
