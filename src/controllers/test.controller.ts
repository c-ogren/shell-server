import type { FastifyReply, FastifyRequest } from "fastify";
import { getTestMessage } from "../services/test.service";

export async function getTestMessageHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const message = getTestMessage();
  return reply.send({ message });
}
