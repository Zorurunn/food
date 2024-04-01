import { Router } from "express";
import {
  getApartments,
  getDistricts,
  getKhoroos,
  getAllFoods,
  getAllCategories,
} from "../controllers/get.controller";

const getRouter = Router();

getRouter
  .get("/getDistricts", getDistricts)
  .get("/getKhoroos", getKhoroos)
  .get("/getApartments", getApartments)
  .get("/getAllCategories", getAllCategories)
  .get("/getAllFoods", getAllFoods);

export default getRouter;
