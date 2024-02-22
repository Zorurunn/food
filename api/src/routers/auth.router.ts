import { Router } from "express";
import {
  signIn,
  signUp,
  reNewPassword,
  otpGenerate,
  changePassword,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/signIn", signIn)
  .post("/signup", signUp)
  .post("/reNewPassword", reNewPassword)
  .post("/otpGenerate", otpGenerate)
  .post("/changePassword", changePassword);

export default authRouter;
