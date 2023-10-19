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
exports.WishListServices = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const wishlist_model_1 = require("./wishlist.model");
const addWishList = (userId, paintingId) => __awaiter(void 0, void 0, void 0, function* () {
    const existInWishList = yield wishlist_model_1.wishList.findOne({ user: userId });
    if (existInWishList === null || existInWishList === void 0 ? void 0 : existInWishList.paintings.includes(paintingId)) {
        throw new apiError_1.default(400, "already exist in wishList");
    }
    const wishListInfo = {
        user: userId,
        paintings: [paintingId],
    };
    const result = yield wishlist_model_1.wishList.create(wishListInfo);
    return result;
});
const getWishList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_model_1.wishList.findOne({ user: userId }).populate("paintings");
    return result;
});
exports.WishListServices = {
    addWishList,
    getWishList,
};
