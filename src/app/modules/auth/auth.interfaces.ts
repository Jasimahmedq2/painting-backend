export type ILogin = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  isVerified: boolean;
  userId: string;
  email: string;
  role: string;
  token: string;
};
