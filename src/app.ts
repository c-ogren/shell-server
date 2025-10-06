import Fastify from "fastify";
import { testRoutes } from "./routes/testRoute";
import { nflRoutes } from "./routes/nflRoute";

export const buildApp = () => {
  const fastify = Fastify({ logger: true });

  fastify.register(testRoutes, { prefix: "/foo" });
  fastify.register(nflRoutes);

  return fastify;
};
