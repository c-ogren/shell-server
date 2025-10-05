import type { FastifyReply, FastifyRequest } from "fastify";
import { getTestMessage } from "../services/testService";

export const getTestMessageHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const message = getTestMessage();
  console.log(request.method);
  return reply.send(message);
};
