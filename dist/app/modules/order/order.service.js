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
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const cart_model_1 = require("../cart/cart.model");
const createOrder = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userCart = yield cart_model_1.Cart.findOne({ user: userId });
    if (!userCart) {
        throw new apiError_1.default(404, "User cart not found");
    }
    const newOrder = new order_model_1.Order(Object.assign(Object.assign({}, payload), { user: userId }));
    const result = yield newOrder.save();
    yield cart_model_1.Cart.deleteOne({ user: userId });
    return result;
});
const retrieveOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({})
        .populate("user")
        .populate("items.painting");
    return result;
});
const retrieveUserOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ user: userId })
        .populate("user")
        .populate("items.painting");
    return result;
});
const changStatus = (orderId, status) => __awaiter(void 0, void 0, void 0, function* () {
    if (["pending", "accepted", "completed", "canceled"].includes(status)) {
        const updatedOrder = yield order_model_1.Order.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!updatedOrder) {
            throw new apiError_1.default(400, "error occurred");
        }
        return updatedOrder;
    }
    else {
        throw new apiError_1.default(400, "invalid status code");
    }
});
exports.OrderServices = {
    createOrder,
    retrieveOrder,
    changStatus,
    retrieveUserOrder,
};
