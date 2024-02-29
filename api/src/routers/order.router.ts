import { Router } from "express";
import { addOrder } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.post("/addOrder", addOrder);

export default orderRouter;
