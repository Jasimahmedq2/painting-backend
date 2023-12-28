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
const payment_model_1 = require("../payment/payment.model");
const payment_service_1 = require("../payment/payment.service");
const createOrder = (userId, tran_id) => __awaiter(void 0, void 0, void 0, function* () {
    const userCart = yield cart_model_1.Cart.findOne({ user: userId });
    if (!userCart) {
        throw new apiError_1.default(404, "User cart not found");
    }
    const paymentInfo = yield payment_model_1.Payment.findOne({ transactionId: tran_id });
    if (!paymentInfo) {
        throw new apiError_1.default(400, "payment info doesn't exist");
    }
    const orderInfo = {
        user: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.userId,
        items: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.serviceIds,
        total: paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.amount,
    };
    const newOrder = new order_model_1.Order(orderInfo);
    const result = yield newOrder.save();
    yield cart_model_1.Cart.deleteOne({ user: userId });
    // change payment status by webhook function
    const changePaymentStatus = yield payment_service_1.PaymentService.webhook(tran_id);
    console.log({ changePaymentStatus });
    return changePaymentStatus;
});
const retrieveOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({}).populate("user");
    return result;
});
const retrieveUserOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({ user: userId }).populate("user");
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
