import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { PaymentService } from "./payment.service";

const initPayment = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = (req as any).user;
  const result = await PaymentService.initPayment(userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Payment init successfully",
    data: result,
  });
};

// const webhook = async (req: Request, res: Response, next: NextFunction) => {
//   const result = await PaymentService.webhook(req.query);
//   sendResponse(res, {
//     success: true,
//     statusCode: 200,
//     message: "Payment verified!",
//     data: result,
//   });
// };

export const PaymentController = {
  initPayment
};
