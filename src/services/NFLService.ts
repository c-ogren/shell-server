import { get, isAxiosError } from "axios";

type PlayerData = {
    filters: any[];
    displayName: string;
    categories: any[];
    labels: string[];
    names: string[];
    displayNames: string[];
    descriptions: string[];
    splitCategories: any[];
}

export class NFLService {
    players: string[];
    
    constructor() {
        // Mock DB hookup
        this.players = [];
    }

    async getPlayerById(id: string): Promise<PlayerData | null> {
        try {
            const playerSplits = await get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${id}/splits`);
            this.players.push(id)
            return playerSplits.data as PlayerData;
        } catch (error) {
            if (isAxiosError(error)) {
                console.error(`Axios error fetching player ${id}:`, error.message);
            } else {
                console.error(`Unknown error fetching player ${id}:`, error);
            }
        }
        return null
    }
}