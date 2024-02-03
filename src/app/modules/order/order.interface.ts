import { Types } from "mongoose";
import { IPaitService } from "../paintService/paint.interface";

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

export type IFinalPending = {
  total: number;
  items: IPaitService[];
  orders: IPaintingOrder[];
};
