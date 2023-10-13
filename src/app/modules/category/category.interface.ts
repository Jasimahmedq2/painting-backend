import { Types } from "mongoose";

export type IPaintCategory = {
  category_name: string;
  paints: Types.ObjectId[];
  image: string;
};
