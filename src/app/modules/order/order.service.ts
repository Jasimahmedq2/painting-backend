import { Types } from "mongoose";
import { IOrderPayload } from "./order.interface";
import { Order } from "./order.model";
import ApiError from "../../../errors/apiError";
import { Cart } from "../cart/cart.model";
import { Payment } from "../payment/payment.model";
import { PaymentService } from "../payment/payment.service";

const createOrder = async (userId: Types.ObjectId, tran_id: string) => {
  const userCart = await Cart.findOne({ user: userId });

  if (!userCart) {
    throw new ApiError(404, "User cart not found");
  }
  const paymentInfo = await Payment.findOne({ transactionId: tran_id });
  if (!paymentInfo) {
    throw new ApiError(400, "payment info doesn't exist");
  }

  const orderInfo = {
    user: paymentInfo?.userId,
    items: paymentInfo?.serviceIds,
    total: paymentInfo?.amount,
  };
  const newOrder = new Order(orderInfo);
  const result = await newOrder.save();
  await Cart.deleteOne({ user: userId });
  // change payment status by webhook function
  const changePaymentStatus = await PaymentService.webhook(tran_id);
  console.log({ changePaymentStatus });
  return changePaymentStatus;
};

const retrieveOrder = async () => {
  const result = await Order.find({}).populate("user").populate("items");
  return result;
};
const retrieveUserOrder = async (userId: string) => {
  const result = await Order.find({ user: userId }).populate("user");
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
