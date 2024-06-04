import axios from "axios";
import { GetWineResponse } from "../../../main";

class WineClient {
    async getWine(wine: string) {
        const url = "http://localhost:3000/wines";
        const getWine: GetWineResponse = await axios.get(url);
        const filteredWine = getWine.data.filter((wineData) => {
          return wineData.name === wine;
        });

        return filteredWine[0]
    }
}

export default new WineClient;