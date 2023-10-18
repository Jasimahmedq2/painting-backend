import { IUpdateUser, IUser } from "./user.interface";
import { User } from "./user.models";

const retrieveProfile = async (userId: string) => {
  const Profile = await User.findById(userId).select({ password: -1 });
  return Profile;
};
const retrievePainter = async (): Promise<IUser[] | null> => {
  const result = await User.find({ role: "painter" })
  return result;
};
const updateProfile = async (userId: string, payload: Partial<IUpdateUser>) => {
  const Profile = await User.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
  });
  return Profile;
};

export const UserServices = {
  retrieveProfile,
  updateProfile,
  retrievePainter,
};
