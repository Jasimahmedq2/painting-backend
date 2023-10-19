"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const router = express_1.default.Router();
router.delete("/delete-user/:id", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), admin_controller_1.AdminControllers.deleteUser);
router.patch("/update-user/:id", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(admin_validation_1.AdminValidationSchema.UpdateUser), admin_controller_1.AdminControllers.updateUser);
router.post("/update-role/:id", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(admin_validation_1.AdminValidationSchema.UpdateUserRole), admin_controller_1.AdminControllers.updateUserRole);
exports.adminRoutes = router;
