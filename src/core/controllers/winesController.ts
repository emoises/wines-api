import { Request, Response } from "express";
import getWineUsecase from "../usecase/getWineUsecase";

class WinesController {
    async execute(req: Request, res: Response) {
         const { wine } = req.params;
         let wineSanitezed = wine.includes("-")
           ? wine.replace(/[-_]/g, " ")
           : wine;
         const response = await getWineUsecase.handle(wineSanitezed);
         res.send(response);
    }
}

export default new WinesController;