"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_role_1 = require("../../../enums/user.role");
const payment_controller_1 = require("./payment.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/init", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER), payment_controller_1.PaymentController.initPayment);
// router.post("/webhook", PaymentController.webhook); 
exports.paymentRoutes = router;
