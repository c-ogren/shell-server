import type { FastifyReply, FastifyRequest } from "fastify";
import { NFLService } from "../services/NFLService"

const nflService = new NFLService();

export class NFLController {
  async getPlayerById(req: FastifyRequest<{ Params: { id: string } }>, res: FastifyReply) {
    try {
      const { id } = req.params;
      const playerData = await nflService.getPlayerById(id);

      if (!playerData) {
        return res.status(404).send({ message: "Player not found" });
      }

      return res.send(playerData);
    } catch (err) {
      console.error("Error in controller:", err);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
}