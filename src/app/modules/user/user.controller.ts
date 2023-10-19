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
const retrievePainter = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.retrievePainter();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve painter user",
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
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { ...updateInfo } = req.body;
  const result = await UserServices.getAllUser();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve users",
    data: result,
  });
});
const changeRole = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { role } = req.body;
  const result = await UserServices.changeRole(userId, role);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully update role",
    data: result,
  });
});

export const UserControllers = {
  retrieveProfile,
  updateProfile,
  retrievePainter,
  getAllUser,
  changeRole,
};
