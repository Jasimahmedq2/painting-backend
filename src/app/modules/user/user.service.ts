import ApiError from "../../../errors/apiError";
import { IUpdateUser, IUser } from "./user.interface";
import { User } from "./user.models";

const retrieveProfile = async (userId: string) => {
  const Profile = await User.findById(userId);
  return Profile;
};
const retrievePainter = async (): Promise<IUser[] | null> => {
  const result = await User.find({ role: "painter" });
  return result;
};
const updateProfile = async (userId: string, payload: Partial<IUpdateUser>) => {
  const Profile = await User.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
  });
  return Profile;
};
const getAllUser = async () => {
  const result = await User.find({});
  return result;
};

const changeRole = async (userId: string, role: string) => {
  console.log(userId);
  if (["admin", "customer", "painter"].includes(role)) {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );
    if (!updateUser) {
      throw new ApiError(400, "error occurred");
    }

    return updateUser;
  } else {
    throw new ApiError(400, "invalid role");
  }
};

export const UserServices = {
  retrieveProfile,
  updateProfile,
  retrievePainter,
  getAllUser,
  changeRole,
};
