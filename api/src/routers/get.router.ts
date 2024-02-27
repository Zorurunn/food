import { Router } from "express";
import {
  getApartments,
  getDistricts,
  getKhoroos,
} from "../controllers/get.controller";

const getRouter = Router();

getRouter
  .get("/getDistricts", getDistricts)
  .get("/getKhoroos", getKhoroos)
  .get("/getApartments", getApartments);

export default getRouter;
