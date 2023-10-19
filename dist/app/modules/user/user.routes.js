"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get("/profile", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), user_controller_1.UserControllers.retrieveProfile);
router.get("/painter", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), user_controller_1.UserControllers.retrievePainter);
router.patch("/profile/update", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), (0, validateRequest_1.default)(user_validation_1.UserValidationSchema.UpdateUser), user_controller_1.UserControllers.updateProfile);
router.get("/get-users", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), user_controller_1.UserControllers.getAllUser);
router.put("/role/:userId", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), user_controller_1.UserControllers.changeRole);
exports.UserRoutes = router;
