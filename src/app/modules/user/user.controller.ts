import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserServices } from "./user.service";
import sendResponse from "../../../shared/sendResponse";

const retrieveProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const result = await UserServices.retrieveProfile(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve user profile data",
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { ...updateInfo } = req.body;
  const result = await UserServices.updateProfile(userId, updateInfo);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully updated user profile",
    data: result,
  });
});

export const UserControllers = {
  retrieveProfile,
  updateProfile,
};
