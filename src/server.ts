import { buildApp } from "./app";

const start = async () => {
  const fastify = buildApp();

  try {
    await fastify.listen({ port: 3333, host: "0.0.0.0" });
    console.log("Shell Server running at http://localhost:3333");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
