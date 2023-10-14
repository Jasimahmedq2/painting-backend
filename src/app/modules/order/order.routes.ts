import express from "express";
import auth from "../../middleware/auth";
import { UserRoles } from "../../../enums/user.role";
import { OrderController } from "./order.controller";
import ValidateRequest from "../../middleware/validateRequest";
import { OrderValidationSchema } from "./order.validation";
const router = express.Router();

router.post(
  "/create-order",
  auth(UserRoles.CUSTOMER),
  ValidateRequest(OrderValidationSchema.createOrder),
  OrderController.createOrder
);

export const orderRoutes = router;
