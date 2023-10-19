"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishListRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("./wishlist.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_role_1 = require("../../../enums/user.role");
const router = express_1.default.Router();
router.get("/get-wishList", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER), wishlist_controller_1.WishListControllers.getWishList);
router.post("/add-wishList", (0, auth_1.default)(user_role_1.UserRoles.CUSTOMER), wishlist_controller_1.WishListControllers.addWishList);
exports.wishListRoutes = router;
