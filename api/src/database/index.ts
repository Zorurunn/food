import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zorurunn:test@zoloocluster.kz13ip4.mongodb.net/food?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
