import { Router } from "express";
import { signIn, signUp, reNewPassword } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/signIn", signIn)
  .post("/signup", signUp)
  .post("/reNewPassword", reNewPassword);

export default authRouter;
