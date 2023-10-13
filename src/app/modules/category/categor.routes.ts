import express from "express";
import { CategoryControllers } from "./category.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import ValidateRequest from "../../middleware/validateRequest";
import { CategoryValidationSchema } from "./category.validation";
const router = express.Router();

router.post(
  "/add-category",
  auth(UserRoles.ADMIN, UserRoles.SUPER_ADMIN),
  ValidateRequest(CategoryValidationSchema.addCategory),
  CategoryControllers.addCategory
);
router.get(
  "/get-categories",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER,
    UserRoles.CUSTOMER
  ),
  CategoryControllers.retrieveCategories
);

export const categoryRoutes = router;
