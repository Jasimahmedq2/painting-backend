"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const wishlist_service_1 = require("./wishlist.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const addWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const { id } = req.params;
    const objId = id;
    const result = yield wishlist_service_1.WishListServices.addWishList(userId, objId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully added in wishList",
        data: result,
    });
}));
const getWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const result = yield wishlist_service_1.WishListServices.getWishList(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully get wishList data",
        data: result,
    });
}));
exports.WishListControllers = {
    addWishList,
    getWishList,
};
