import express from "express";
import { UserRoles } from "../../../enums/user.role";
import { PaymentController } from "./payment.controller";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/init", auth(UserRoles.CUSTOMER), PaymentController.initPayment);

// router.post("/webhook", PaymentController.webhook); 

export const paymentRoutes = router;
