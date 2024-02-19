import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.post("/email/send", sendEmail);

export default emailRouter;
