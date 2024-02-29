import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: String,
  test: {
    a: String,
    b: String,
  },
});
export const OrderModel = model("order", orderSchema);
