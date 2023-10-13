import express from "express";
import { AdminControllers } from "./admin.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import ValidateRequest from "../../middleware/validateRequest";
import { AdminValidationSchema } from "./admin.validation";
const router = express.Router();

router.delete(
  "/delete-user/:id",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  AdminControllers.deleteUser
);
router.patch(
  "/update-user/:id",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  ValidateRequest(AdminValidationSchema.UpdateUser),
  AdminControllers.updateUser
);
router.post(
  "/update-role/:id",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  ValidateRequest(AdminValidationSchema.UpdateUserRole),
  AdminControllers.updateUserRole
);

export const adminRoutes = router;
