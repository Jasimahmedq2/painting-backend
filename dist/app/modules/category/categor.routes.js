"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
router.post("/add-category", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(category_validation_1.CategoryValidationSchema.addCategory), category_controller_1.CategoryControllers.addCategory);
router.get("/get-categories", category_controller_1.CategoryControllers.retrieveCategories);
router.get("/get-category/:id", category_controller_1.CategoryControllers.retrieveSingleCategory);
exports.categoryRoutes = router;
