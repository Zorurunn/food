import { Schema, model } from "mongoose";

const foodSchema = new Schema({
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
    default: "breakfast",
  },
});
export const FoodModel = model("food", foodSchema);
