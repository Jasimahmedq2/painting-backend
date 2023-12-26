import { Types } from "mongoose";
import { User } from "../user/user.models";
import ApiError from "../../../errors/apiError";
import { NewsLetter } from "./newsLetter.model";

const subscribe = async (email: string, userId: Types.ObjectId) => {

  const user = await User.findById(userId);
  if (user?.email.toString() !== email.toString()) {
    throw new ApiError(400, "there required your logged-in email");
  }
  const alreadySubscribed = await NewsLetter.findOne({ email: email });
  if (alreadySubscribed) {
    throw new ApiError(400, "you have subscribed the newsLetter already!");
  }
  const result = await NewsLetter.create({ email });
  return result;
};

export const NewsLetterServices = {
  subscribe,
};
