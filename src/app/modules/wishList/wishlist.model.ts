import { Schema, model } from "mongoose";

const wishListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    paintings: [{ type: Schema.Types.ObjectId, ref: "pantService" }],
  },
  { timestamps: true }
);

export const wishList = model("whishList", wishListSchema);
