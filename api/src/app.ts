import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { authMiddleware } from "./middlewares";
import emailRouter from "./routers/email.router";
import getUserRouter from "./routers/getUser.router";
import userUpdateRouter from "./routers/userUpdate.router";
import getRouter from "./routers/get.router";
import basketRouter from "./routers/basket.router";
import orderRouter from "./routers/order.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/", emailRouter);
app.use("/", foodRouter);
app.use("/", orderRouter);
app.use("/", getRouter);

app.use(authMiddleware);

app.use("/", getUserRouter);
app.use("/", userUpdateRouter);
app.use("/", basketRouter);

export default app;
