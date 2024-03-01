import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    requd: true,
  },
  deliveryAddress: {
    district: String,
    khoroo: String,
    apartment: String,
    additionalInformation: String,
    phoneNumber: Number,
    // paymentMethod: String,
  },

  foods: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        requd: true,
      },
      name: String,
      imgPath: String,
      price: Number,
      discount: Number,
      ingredients: String,
      quantity: Number,
    },
  ],
  deliveryStatus: {
    type: Boolean,
    required: false,
  },
  createdAt: String,
  // deliveredAt: Date,
});
export const OrderModel = model("order", orderSchema);
