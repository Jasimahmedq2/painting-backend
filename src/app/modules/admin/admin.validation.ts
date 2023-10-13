import { z } from "zod";
import { UserRoleConstant } from "../auth/auth.constant";

const UpdateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    phoneNo: z.string().optional(),
    image: z.string().optional(),
  }),
});
const UpdateUserRole = z.object({
  body: z.object({
    role: z.enum([...UserRoleConstant] as [string, ...string[]]),
  }),
});

export const AdminValidationSchema = {
  UpdateUser,
  UpdateUserRole,
};
