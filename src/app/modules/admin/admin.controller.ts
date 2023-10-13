import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AdminServices } from "./admin.services";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "../user/user.interface";

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AdminServices.deleteUser(id);
  sendResponse<IUser | null>(res, {
    statusCode: 200,
    success: true,
    message: "successfully deleted a user",
    data: result,
  });
});
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateInfo } = req.body;
  const result = await AdminServices.updateUser(id, updateInfo);
  sendResponse<IUser | null>(res, {
    statusCode: 200,
    success: true,
    message: "successfully update a user",
    data: result,
  });
});
const updateUserRole = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const role = req.body;
  const result = await AdminServices.updateUserRole(id, role);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully update a user role",
    data: result,
  });
});

export const AdminControllers = {
  deleteUser,
  updateUser,
  updateUserRole,
};
