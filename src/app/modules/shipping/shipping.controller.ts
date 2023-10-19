import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ShippingAddressService } from "./shipping.service";
import sendResponse from "../../../shared/sendResponse";
import { IShipping } from "./shiping.interfaces";

const addShippingAddress = catchAsync(async (req: Request, res: Response) => {
  console.log({body:req.body});
  const { userId } = (req as any).user;
  const { ...updateInfo } = req.body;
  const result = await ShippingAddressService.addShippingAddress(
    userId,
    updateInfo
  );
  sendResponse<IShipping | null>(res, {
    statusCode: 200,
    success: true,
    message: "successfully created a shipping address",
    data: result,
  });
});
const retrieveShippingAddress = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = (req as any).user;

    const result = await ShippingAddressService.retrieveShippingAddress(userId);
    sendResponse<IShipping | null>(res, {
      statusCode: 200,
      success: true,
      message: "successfully retrieve a shipping address",
      data: result,
    });
  }
);

export const shippingAddressController = {
  addShippingAddress,
  retrieveShippingAddress,
};
