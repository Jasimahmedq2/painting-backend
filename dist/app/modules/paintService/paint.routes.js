"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaintRoutes = void 0;
const express_1 = __importDefault(require("express"));
const paint_controller_1 = require("./paint.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const paint_validation_1 = require("./paint.validation");
const router = express_1.default.Router();
router.post("/add-service", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(paint_validation_1.paintValidationSchema.addPaintSchema), paint_controller_1.PaintControllers.addPaintService);
router.get("/get-services", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), paint_controller_1.PaintControllers.retrievePaintServices);
router.get("/get-service/:id", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), paint_controller_1.PaintControllers.retrieveSinglePaint);
router.delete("/remove/:id", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), paint_controller_1.PaintControllers.removePaintService);
router.patch("/update/:id", (0, validateRequest_1.default)(paint_validation_1.paintValidationSchema.updatePaintSchema), (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), paint_controller_1.PaintControllers.updatePaintService);
exports.PaintRoutes = router;
