import { Types } from "mongoose";
import { IShipping, IUpdateAddress } from "./shiping.interfaces";
import { ShippingAddress } from "./shipping.model";

const addShippingAddress = async (
  userId: Types.ObjectId,
  payload: IUpdateAddress
): Promise<IShipping | null> => {
  const existShipping = await ShippingAddress.findOne({ user: userId });

  if (existShipping && existShipping.isFilled) {
    const result = await ShippingAddress.findOneAndUpdate(
      { user: userId },
      { ...payload }
    );
    return result;
  } else {

    const info = { ...payload, user: userId, isFilled: true };
    const result = await ShippingAddress.create(info);
    return result;
  }
};

const retrieveShippingAddress = async (
  userId: string
): Promise<IShipping | null> => {
  const result = await ShippingAddress.findOne({ user: userId });
  return result;
};

export const ShippingAddressService = {
  addShippingAddress,
  retrieveShippingAddress,
};
