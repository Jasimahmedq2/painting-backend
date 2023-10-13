import ApiError from "../../../errors/apiError";
import { IUpdateUser, IUser, IUserRole } from "../user/user.interface";
import { User } from "../user/user.models";

const deleteUser = async (userId: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};
const updateUser = async (
  userId: string,
  payload: Partial<IUpdateUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
  });
  return result;
};
const updateUserRole = async (userId: string, role: IUserRole) => {
  const findUser = await User.findById(userId);
  if (!findUser) {
    throw new ApiError(404, "user doesn't found");
  }
  findUser.role = role;
  const result = await findUser.save();
  return result;
};

export const AdminServices = {
  deleteUser,
  updateUser,
  updateUserRole,
};
