import { z } from "zod";

const UpdateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    phoneNo: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const UserValidationSchema = {
  UpdateUser,
};
