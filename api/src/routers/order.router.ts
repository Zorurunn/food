import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.post("/createOrder", createOrder).get("/getOrders", getOrders);

export default orderRouter;
