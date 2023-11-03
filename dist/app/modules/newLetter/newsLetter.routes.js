"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsLetterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const newsLetter_controller_1 = require("./newsLetter.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const router = express_1.default.Router();
router.post("/subscribe", (0, auth_1.default)(user_role_1.UserRoles.ADMIN, user_role_1.UserRoles.SUPER_ADMIN, user_role_1.UserRoles.CUSTOMER, user_role_1.UserRoles.PAINTER), newsLetter_controller_1.NewsLetterController.subscribe);
exports.newsLetterRoutes = router;
