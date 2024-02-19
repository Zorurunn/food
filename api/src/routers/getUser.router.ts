import { Router } from "express";
import { getUser } from "../controllers/getUser.controller";

const getUserRouter = Router();

getUserRouter.post("/getUser", getUser);

export default getUserRouter;
