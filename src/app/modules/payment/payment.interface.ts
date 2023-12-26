import { Types } from "mongoose";

export type IPayment = {
  amount: number;
  userId: Types.ObjectId;
  status: "pending" | "paid";
  serviceIds: Types.ObjectId[];
  transactionId: string;
  paymentGatewayData?: JSON;
};
