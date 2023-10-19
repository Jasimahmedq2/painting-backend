"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shippingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const shipping_validation_1 = require("./shipping.validation");
const shipping_controller_1 = require("./shipping.controller");
const router = express_1.default.Router();
router.post("/add-shipping", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.PAINTER, user_role_1.UserRoles.CUSTOMER), (0, validateRequest_1.default)(shipping_validation_1.ShippingValidation.addShipping), shipping_controller_1.shippingAddressController.addShippingAddress);
router.get("/get-shipping", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.PAINTER, user_role_1.UserRoles.CUSTOMER), shipping_controller_1.shippingAddressController.retrieveShippingAddress);
exports.shippingRoutes = router;
