import { Router } from "express";
import { createFood, getAllFoods } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.get("/getAllFoods", getAllFoods).post("/createFood", createFood);

export default foodRouter;
