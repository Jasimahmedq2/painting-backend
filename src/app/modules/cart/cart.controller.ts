import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CartServices } from "./cart.service";
import sendResponse from "../../../shared/sendResponse";

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { ...cartInfo } = req.body;
  const result = await CartServices.addToCart(userId, cartInfo);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully added the service in cart",
    data: result,
  });
});
const getCartWithPrices = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { ...cartInfo } = req.body;
  const result = await CartServices.getCartWithPrices(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve cart service",
    data: result,
  });
});

export const CartControllers = {
  addToCart,
  getCartWithPrices,
};
