import { Router } from "express";
import { userUpdate } from "../controllers/userUpdate.controller";

const userUpdateRouter = Router();

userUpdateRouter.post("/userUpdate", userUpdate);

export default userUpdateRouter;
