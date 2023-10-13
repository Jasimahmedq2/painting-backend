export type IUserRole = "painter" | "customer" | "admin" | "super_admin";

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: IUserRole;
  isVerified: boolean;
  phoneNo: string;
  image: string;
};
export type IUpdateUser = {
  name: string;
  phoneNo: string;
  image: string;
};
