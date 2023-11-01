import express from "express";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import { OrderController } from "./order.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { OrderValidationSchema } from "./order.validation";
const router = express.Router();

router.post(
  "/create-order",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  ValidateRequest(OrderValidationSchema.createOrder),
  OrderController.createOrder
);
router.get(
  "/get-order",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  OrderController.retrieveOrder
);
router.get(
  "/get-user-order",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  OrderController.retrieveUserOrder
);
router.put(
  "/update-status/:orderId",
  auth(
    UserRoles.CUSTOMER,
    UserRoles.ADMIN,
    UserRoles.SUPER_ADMIN,
    UserRoles.PAINTER
  ),
  OrderController.changStatus
);

export const orderRoutes = router;
