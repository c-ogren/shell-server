import Fastify from "fastify";
import { testRoutes } from "./routes/testRoute";

export const buildApp = () => {
  const fastify = Fastify({ logger: true });

  fastify.register(testRoutes, { prefix: "/foo" });

  return fastify;
};
