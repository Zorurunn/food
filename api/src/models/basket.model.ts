import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    // default: "breakfast",
  },
  countity: {
    type: Number,
    required: true,
  },
  useId: {
    type: String,
    required: true,
  },
});
export const BasketModel = model("basket", basketSchema);
