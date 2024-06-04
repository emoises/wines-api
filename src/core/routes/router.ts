import { Request, Response, Router } from "express";
import winesController from "../controllers/winesController";

export const routes = Router();

routes.get('/wines/:wine', winesController.execute)