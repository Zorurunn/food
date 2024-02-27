import { Schema, model } from "mongoose";

const khorooSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const KhorooModel = model("khoroo", khorooSchema);
