import { Response } from "express";
import ApiError from "../../../errors/apiError";
import { sslService } from "../../ssl/ssl.service";
import { PaintService } from "../paintService/paint.model";
import { User } from "../user/user.models";
import { Payment } from "./payment.model";
import { Types } from "mongoose";
import { Cart } from "../cart/cart.model";

const initPayment = async (userId: Types.ObjectId) => {
  // const { userId, serviceId } = data;
  const userInfo = await User.findById(userId);

  if (!userInfo) {
    throw new ApiError(404, "user doesn't exist");
  }

  // retrieve cart information to process order payment
  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.service");

    if (!cart) {
      throw new ApiError(404, "cart not found");
    }

    let totalPrice = 0;
    let serviceIds: Types.ObjectId[] = [];

    for (const item of cart.items) {
      if (item.service) {
        const service = await PaintService.findById(item.service);

        if (service) {
          totalPrice += Number(service.price) * Number(item.quantity);
          serviceIds.push(service?.id);
        }
      }
    }

    const transactionId =
      "jasim-paint-" +
      Date.now().toString() +
      Math.floor(Math.random() * 1000).toString();

    console.log(transactionId);

    const paymentSession = await sslService.initPayment({
      total_amount: totalPrice,
      tran_id: transactionId,
      cus_name: userInfo.name,
      cus_email: userInfo.email,
      cus_id: userInfo._id,
    });

    console.log({ paymentSession });

    const newPayment = new Payment({
      amount: totalPrice,
      transactionId: transactionId,
      userId: userInfo?._id,
      serviceIds: serviceIds,
      paymentGatewayData: paymentSession,
    });

    await newPayment.save();
    console.log(paymentSession);
    return paymentSession.GatewayPageURL;
  } catch (error) {
    throw new ApiError(400, "error occurred");
  }
};

const webhook = async (tran_id: string) => {
  if (!tran_id) {
    throw new ApiError(400, "transaction id not found");
  }
  try {
    const updateData = await Payment.updateOne(
      { transactionId: tran_id },
      {
        $set: {
          status: "paid",
        },
      }
    );

    return {
      massage: "success",
    };
  } catch (error) {
    throw new ApiError(401, "something went wrong");
  }
};

export const PaymentService = {
  initPayment,
  webhook,
};
