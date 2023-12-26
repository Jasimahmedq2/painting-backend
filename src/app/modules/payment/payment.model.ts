import mongoose, { Schema, model } from "mongoose";
import { IPayment } from "./payment.interface";
import { object } from "zod";

const paymentSchema = new Schema<IPayment>(
  {
    amount: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    serviceIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "paintService",
      },
    ],
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    paymentGatewayData: {
      type: JSON,
    },
  },
  { timestamps: true }
);

export const Payment = model<IPayment>("payment", paymentSchema);
