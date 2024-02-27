import { Router } from "express";
import { addBasket, getBaskets } from "../controllers/basket.controller";

const basketRouter = Router();

basketRouter.post("/addBasket", addBasket).get("/getBaskets", getBaskets);

export default basketRouter;
