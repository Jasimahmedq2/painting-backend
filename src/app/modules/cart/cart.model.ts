import { Schema, model } from "mongoose";
import { ICart } from "./cart.interfaces";
import { number } from "zod";

const CartModel = new Schema<ICart>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  items: {
    type: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: "paintService",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
});

export const Cart = model<ICart>("cart", CartModel);
