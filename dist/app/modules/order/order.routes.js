"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/create-order", 
// ValidateRequest(OrderValidationSchema.createOrder),
order_controller_1.OrderController.createOrder);
router.get("/get-order", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.PAINTER), order_controller_1.OrderController.retrieveOrder);
router.get("/get-user-order", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.PAINTER), order_controller_1.OrderController.retrieveUserOrder);
router.put("/update-status/:orderId", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.PAINTER), order_controller_1.OrderController.changStatus);
exports.orderRoutes = router;
