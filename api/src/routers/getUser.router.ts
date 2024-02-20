import { Router } from "express";
import { getUser } from "../controllers/getUser.controller";

const getUserRouter = Router();

getUserRouter.get("/getUser", getUser);

export default getUserRouter;
