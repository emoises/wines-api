import { AxiosResponse } from "axios";
import { Request } from "express";

type Harmonization = {
  id: string;
  name: string;
  winesId: string[];
};

type Wines = {
    id: string;
    name: string;
    harmonizationId: number[];
}

interface WineRequest extends Request {
    params: {
        wine: string;
    }
}

interface GetWineResponse extends AxiosResponse {
    data: Wines[];
}