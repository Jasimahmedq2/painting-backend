import { Types } from "mongoose";
import { IOrderPayload } from "./order.interface";
import { Order } from "./order.model";
import ApiError from "../../../errors/apiError";
import { Cart } from "../cart/cart.model";

const createOrder = async (userId: Types.ObjectId, payload: IOrderPayload) => {
  const userCart = await Cart.findOne({ user: userId });

  if (!userCart) {
    throw new ApiError(404, "User cart not found");
  }
  const newOrder = new Order({ ...payload, user: userId });
  const result = await newOrder.save();
  await Cart.deleteOne({ user: userId });
  return result;
};

const retrieveOrder = async () => {
  const result = await Order.find({})
    .populate("user")
    .populate("items.painting");
  return result;
};
const retrieveUserOrder = async (userId: string) => {
  const result = await Order.find({ user: userId })
    .populate("user")
    .populate("items.painting");
  return result;
};

const changStatus = async (orderId: string, status: string) => {
  if (["pending", "accepted", "completed", "canceled"].includes(status)) {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!updatedOrder) {
      throw new ApiError(400, "error occurred");
    }

    return updatedOrder;
  } else {
    throw new ApiError(400, "invalid status code");
  }
};

export const OrderServices = {
  createOrder,
  retrieveOrder,
  changStatus,
  retrieveUserOrder,
};
