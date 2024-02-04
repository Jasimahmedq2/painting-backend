import { Schema, model } from "mongoose";
import { IPaitService } from "./paint.interface";
import { Category } from "../category/category.model";

const PaintModel = new Schema<IPaitService>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  painter: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  reviews: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        review: {
          rating: {
            type: Number,
            default: 0,
          },
          text: {
            type: String,
            default: "",
          },
        },
      },
    ],
    default: [],
  },
});

PaintModel.post("save", async function () {
  const product = this;

  const category = await Category.findById(product.category);

  console.log({ category });

  if (category) {
    category.paints.push(product._id);
    await category.save();
  }
});

export const PaintService = model<IPaitService>("paintService", PaintModel);
