import express from "express";
import { WishListControllers } from "./wishlist.controller";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";

const router = express.Router();

router.get(
  "/get-wishList",
  auth(UserRoles.CUSTOMER),
  WishListControllers.getWishList
);
router.post(
  "/add-wishList",
  auth(UserRoles.CUSTOMER),
  WishListControllers.addWishList
);

export const wishListRoutes = router;
