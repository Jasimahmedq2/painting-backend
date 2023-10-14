import express from "express";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import ValidateRequest from "../../middleware/validateRequest";
import { ShippingValidation } from "./shipping.validation";
import { shippingAddressController } from "./shipping.controller";
const router = express.Router();

router.post(
  "/add-shipping",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER,
    UserRoles.CUSTOMER
  ),
  ValidateRequest(ShippingValidation.addShipping),
  shippingAddressController.addShippingAddress
);
router.get(
  "/get-shipping",
  auth(
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER,
    UserRoles.CUSTOMER
  ),
  shippingAddressController.retrieveShippingAddress
);

export const shippingRoutes = router;
