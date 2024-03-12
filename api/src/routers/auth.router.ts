import { Router } from "express";
import {
  signIn,
  signUp,
  otpGenerate,
  changePassword,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/signIn", signIn)
  .post("/signup", signUp)
  .post("/otpGenerate", otpGenerate)
  .post("/changePassword", changePassword);

export default authRouter;
