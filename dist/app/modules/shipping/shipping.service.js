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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddressService = void 0;
const shipping_model_1 = require("./shipping.model");
const addShippingAddress = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existShipping = yield shipping_model_1.ShippingAddress.findOne({ user: userId });
    if (existShipping && existShipping.isFilled) {
        const result = yield shipping_model_1.ShippingAddress.findOneAndUpdate({ user: userId }, Object.assign({}, payload));
        return result;
    }
    else {
        const info = Object.assign(Object.assign({}, payload), { user: userId, isFilled: true });
        const result = yield shipping_model_1.ShippingAddress.create(info);
        return result;
    }
});
const retrieveShippingAddress = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shipping_model_1.ShippingAddress.findOne({ user: userId });
    return result;
});
exports.ShippingAddressService = {
    addShippingAddress,
    retrieveShippingAddress,
};
