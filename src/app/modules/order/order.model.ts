import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    items: [
      {
        painting: { type: Schema.Types.ObjectId, ref: "paintService" },
        quantity: Number,
      },
    ],
    total: Number,
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = model("order", orderSchema);
