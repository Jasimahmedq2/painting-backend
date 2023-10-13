import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { WishListServices } from "./wishlist.service";
import { Types, isValidObjectId } from "mongoose";
import sendResponse from "../../../shared/sendResponse";

const addWishList = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { id } = req.params;
  const objId = id as unknown as Types.ObjectId;
  const result = await WishListServices.addWishList(userId, objId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully added in wishList",
    data: result,
  });
});

const getWishList = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;

  const result = await WishListServices.getWishList(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully get wishList data",
    data: result,
  });
});

export const WishListControllers = {
  addWishList,
  getWishList,
};
