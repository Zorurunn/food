import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  useId: {
    type: mongoose.Schema.Types.ObjectId,
    requd: true,
  },
  deliveryAddress: {
    district: String,
    khoroo: String,
    apartment: String,
    additionalInformation: String,
    phoneNumber: Number,
    paymentMethod: String,
  },

  foods: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        requd: true,
      },
      name: String,
      price: Number,
      discount: Number,
      quantity: Number,
    },
  ],
  deliveryStatus: {
    type: String,
    required: true,
  },
  createdAt: Date,
  deliveredAt: Date,
});
export const OrderModel = model("order", orderSchema);
