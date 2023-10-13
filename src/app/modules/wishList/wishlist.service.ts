import { Types } from "mongoose";
import ApiError from "../../../errors/apiError";
import { wishList } from "./wishlist.model";

const addWishList = async (userId: string, paintingId: Types.ObjectId) => {
  const existInWishList = await wishList.findOne({ user: userId });
  if (existInWishList?.paintings.includes(paintingId)) {
    throw new ApiError(400, "already exist in wishList");
  }

  const wishListInfo = {
    user: userId,
    paintings: [paintingId],
  };

  const result = await wishList.create(wishListInfo);
  return result;
};

const getWishList = async (userId: string) => {
  const result = await wishList.findOne({ user: userId }).populate("paintings");
  return result;
};

export const WishListServices = {
  addWishList,
  getWishList,
};
