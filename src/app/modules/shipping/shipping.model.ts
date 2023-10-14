import { Schema, model } from "mongoose";
import { IShipping } from "./shiping.interfaces";

const addressSchema = new Schema<IShipping>(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    isFilled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ShippingAddress = model<IShipping>(
  "shippingAddress",
  addressSchema
);
