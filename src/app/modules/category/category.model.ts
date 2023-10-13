import { Schema, model } from "mongoose";
import { IPaintCategory } from "./category.interface";

const PaintCategoryModel = new Schema<IPaintCategory>({
  category_name: {
    type: String,
    required: true,
  },
  paints: {
    type: [
      {
        paintService: Schema.Types.ObjectId,
        ref: "paint",
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
