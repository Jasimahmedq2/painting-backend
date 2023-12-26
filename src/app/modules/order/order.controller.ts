import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderServices } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import { IPaintingOrder } from "./order.interface";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId, tran_id } = (req as any).query;
  console.log({ userId, tran_id });
  // const { ...info } = req.body;
  const result = await OrderServices.createOrder(userId, tran_id);
  if (result.massage === "success") {
    res.redirect("https://painthut.vercel.app/success");
  }
});

const retrieveOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderServices.retrieveOrder();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve all order",
    data: result,
  });
});
const retrieveUserOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const result = await OrderServices.retrieveUserOrder(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve all order",
    data: result,
  });
});
const changStatus = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const statusInfo = req.body;
  const result = await OrderServices.changStatus(orderId, statusInfo.status);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully update a order status",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  retrieveOrder,
  changStatus,
  retrieveUserOrder,
};
