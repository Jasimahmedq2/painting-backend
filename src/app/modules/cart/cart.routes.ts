import express from "express";
import { CartControllers } from "./cart.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
const router = express.Router();

router.post(
  "/add-to-cart",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  CartControllers.addToCart
);
router.get(
  "/get-cart",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  CartControllers.getCartWithPrices
);

export const cartRoutes = router;
