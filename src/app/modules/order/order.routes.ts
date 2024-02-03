import express from "express";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import { OrderController } from "./order.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { OrderValidationSchema } from "./order.validation";
const router = express.Router();

router.post(
  "/create-order",
  // ValidateRequest(OrderValidationSchema.createOrder),
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

// get all peding order for specific user
router.get(
  "/pending",
  auth(UserRoles.CUSTOMER, UserRoles.PAINTER),
  OrderController.retrievePendingOrders
);
router.get(
  "/completed",
  auth(UserRoles.CUSTOMER, UserRoles.PAINTER),
  OrderController.completedOrders
);
router.get(
  "/canceled",
  auth(UserRoles.CUSTOMER, UserRoles.PAINTER),
  OrderController.CanceledOrders
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
