import { Schema, model } from "mongoose";

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const ApartmentModel = model("apartment", apartmentSchema);
