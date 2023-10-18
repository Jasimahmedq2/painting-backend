import { Schema, model } from "mongoose";
import { IPaintCategory } from "./category.interface";

const PaintCategoryModel = new Schema<IPaintCategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  paints: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "paintService",
      },
    ],
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
});

export const Category = model<IPaintCategory>("category", PaintCategoryModel);
