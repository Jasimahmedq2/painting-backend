import { Types } from "mongoose";

export type ISingleService = {
  service: Types.ObjectId;
  quantity: number;
};

export type ICart = {
  user: Types.ObjectId;
  items: ISingleService[];
};
