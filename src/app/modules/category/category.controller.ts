import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CategoryServices } from "./category.services";
import sendResponse from "../../../shared/sendResponse";

const addCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.addCategory(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully added a category",
    data: result,
  });
});
const retrieveCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.retrieveCategories(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully retrieve  categories",
    data: result,
  });
});

export const CategoryControllers = {
  addCategory,
  retrieveCategories,
};
