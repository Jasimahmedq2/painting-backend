import { Types } from "mongoose";

export type IPaintingService = {
  painting: string;
  quantity: number;
};

export type IOrderPayload = {
  items: IPaintingService[];
  total: number;
};

export type IPaintingOrder = {
  user: Types.ObjectId;
  items: IPaintingService[];
  total: number;
  status: string;
};
