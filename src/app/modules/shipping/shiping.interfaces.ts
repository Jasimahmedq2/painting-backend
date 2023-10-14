import { Types } from "mongoose";

export type IShipping = {
  user: Types.ObjectId;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNo: string;
  isFilled: boolean;
};

export type IUpdateAddress = {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phoneNo: string;
};
