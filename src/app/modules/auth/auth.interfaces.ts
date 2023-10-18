export type ILogin = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  isVerified: boolean;
  role: string;
  token: string;
};
