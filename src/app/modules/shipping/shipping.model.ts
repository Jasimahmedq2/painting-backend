import { Schema, model } from "mongoose";
import { boolean } from "zod";

const addressSchema = new Schema(
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
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ShippingAddress = model("shippingAddress", addressSchema);