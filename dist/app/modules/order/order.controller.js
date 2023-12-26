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
exports.OrderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const order_service_1 = require("./order.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, tran_id } = req.query;
    console.log({ userId, tran_id });
    // const { ...info } = req.body;
    const result = yield order_service_1.OrderServices.createOrder(userId, tran_id);
    if (result.massage === "success") {
        res.redirect("https://painthut.vercel.app/success");
    }
}));
const retrieveOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderServices.retrieveOrder();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve all order",
        data: result,
    });
}));
const retrieveUserOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const result = yield order_service_1.OrderServices.retrieveUserOrder(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve all order",
        data: result,
    });
}));
const changStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const statusInfo = req.body;
    const result = yield order_service_1.OrderServices.changStatus(orderId, statusInfo.status);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully update a order status",
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    retrieveOrder,
    changStatus,
    retrieveUserOrder,
};
