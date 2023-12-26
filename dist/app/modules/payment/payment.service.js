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
exports.PaymentService = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const ssl_service_1 = require("../../ssl/ssl.service");
const paint_model_1 = require("../paintService/paint.model");
const user_models_1 = require("../user/user.models");
const payment_model_1 = require("./payment.model");
const cart_model_1 = require("../cart/cart.model");
const initPayment = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // const { userId, serviceId } = data;
    const userInfo = yield user_models_1.User.findById(userId);
    if (!userInfo) {
        throw new apiError_1.default(404, "user doesn't exist");
    }
    // retrieve cart information to process order payment
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: userId }).populate("items.service");
        if (!cart) {
            throw new apiError_1.default(404, "cart not found");
        }
        let totalPrice = 0;
        let serviceIds = [];
        for (const item of cart.items) {
            if (item.service) {
                const service = yield paint_model_1.PaintService.findById(item.service);
                if (service) {
                    totalPrice += Number(service.price) * Number(item.quantity);
                    serviceIds.push(service === null || service === void 0 ? void 0 : service.id);
                }
            }
        }
        const transactionId = "jasim-paint-" +
            Date.now().toString() +
            Math.floor(Math.random() * 1000).toString();
        console.log(transactionId);
        const paymentSession = yield ssl_service_1.sslService.initPayment({
            total_amount: totalPrice,
            tran_id: transactionId,
            cus_name: userInfo.name,
            cus_email: userInfo.email,
            cus_id: userInfo._id,
        });
        console.log({ paymentSession });
        const newPayment = new payment_model_1.Payment({
            amount: totalPrice,
            transactionId: transactionId,
            userId: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id,
            serviceIds: serviceIds,
            paymentGatewayData: paymentSession,
        });
        yield newPayment.save();
        console.log(paymentSession);
        return paymentSession.GatewayPageURL;
    }
    catch (error) {
        throw new apiError_1.default(400, "error occurred");
    }
});
const webhook = (tran_id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!tran_id) {
        throw new apiError_1.default(400, "transaction id not found");
    }
    try {
        const updateData = yield payment_model_1.Payment.updateOne({ transactionId: tran_id }, {
            $set: {
                status: "paid",
            },
        });
        return {
            massage: "success",
        };
    }
    catch (error) {
        throw new apiError_1.default(401, "something went wrong");
    }
});
exports.PaymentService = {
    initPayment,
    webhook,
};
