import { Types } from "mongoose";

export type IPaintCategory = {
  name: string;
  paints: Types.ObjectId[];
  image: string;
};
