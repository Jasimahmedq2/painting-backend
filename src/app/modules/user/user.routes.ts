import express from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import ValidateRequest from "../../middleware/validateRequest";
import { UserValidationSchema } from "./user.validation";
const router = express.Router();

router.get(
  "/profile",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.CUSTOMER,
    UserRoles.PAINTER
  ),
  UserControllers.retrieveProfile
);
router.get(
  "/painter",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.CUSTOMER,
    UserRoles.PAINTER
  ),
  UserControllers.retrievePainter
);
router.patch(
  "/profile/update",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.CUSTOMER,
    UserRoles.PAINTER
  ),
  ValidateRequest(UserValidationSchema.UpdateUser),
  UserControllers.updateProfile
);

export const UserRoutes = router;
