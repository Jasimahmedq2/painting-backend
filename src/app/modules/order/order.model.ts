import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    items: [
      {
        type: { type: Schema.Types.ObjectId, ref: "paintService" },
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
