import { Types } from "mongoose";
import { IOrderPayload } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (userId: Types.ObjectId, payload: IOrderPayload) => {
  const newOrder = new Order({ ...payload, user: userId });
  const result = await newOrder.save();
  return result;
};

export const OrderServices = {
  createOrder,
};
