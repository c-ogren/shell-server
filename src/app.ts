import Fastify from "fastify";
import testRoutes from "./routes/test.route";

export function buildApp() {
  const fastify = Fastify({ logger: true });

  fastify.register(testRoutes, { prefix: "/test" });

  return fastify;
}
