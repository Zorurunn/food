import { Schema, model } from "mongoose";

const districtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const DistrictModel = model("district", districtSchema);
