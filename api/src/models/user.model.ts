import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  OneTimePass: {
    otp: String,
    expiresIn: Number,
    // required: false,
  },
});

export const UserModel = model("user", userSchema);
