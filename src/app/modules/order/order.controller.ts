import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderServices } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import { IPaintingOrder } from "./order.interface";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { ...info } = req.body;
  const result = await OrderServices.createOrder(userId, info);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully created a order",
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
