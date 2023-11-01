import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { NewsLetterServices } from "./newsLetter.services";
import sendResponse from "../../../shared/sendResponse";

const subscribe = catchAsync(async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const bodyInfo = req.body;
  const result = await NewsLetterServices.subscribe(bodyInfo?.email, userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "successfully subscribed the newsLetter",
    data: result,
  });
});

export const NewsLetterController = {
  subscribe,
};
