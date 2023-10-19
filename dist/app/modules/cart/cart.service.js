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
exports.CartServices = void 0;
const cart_model_1 = require("./cart.model");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const paint_model_1 = require("../paintService/paint.model");
const addToCart = (userId, service) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!userId || !service || !service.service) {
            throw new apiError_1.default(401, "Invalid input data");
        }
        const cartExist = yield cart_model_1.Cart.findOne({ user: userId });
        if (!cartExist) {
            const newCart = new cart_model_1.Cart({
                user: userId,
                items: [{ service: service.service, quantity: 1 }],
            });
            yield newCart.save();
        }
        else {
            const existingItem = cartExist.items.find((item) => item.service.toString() === service.service.toString());
            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                cartExist.items.push({ service: service.service, quantity: 1 });
            }
            yield cartExist.save();
        }
    }
    catch (error) {
        throw new apiError_1.default(401, "error occurred");
    }
});
const getCartWithPrices = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: userId }).populate("items.service");
        if (!cart) {
            throw new apiError_1.default(404, "cart not found");
        }
        let totalPrice = 0;
        for (const item of cart.items) {
            if (item.service) {
                const service = yield paint_model_1.PaintService.findById(item.service);
                if (service) {
                    totalPrice += Number(service.price) * Number(item.quantity);
                }
            }
        }
        yield cart.save();
        return { cart, totalPrice };
    }
    catch (error) {
        throw new apiError_1.default(401, "error  occurred");
    }
});
const updateCartItemQuantity = (userId, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: userId });
        if (!cart) {
            throw new apiError_1.default(404, "Cart not found for this user");
        }
        const cartItem = cart.items.find((item) => item.service.toString() === serviceId.toString());
        if (!cartItem) {
            throw new apiError_1.default(401, "Item not found in the cart");
        }
        cartItem.quantity += 1;
        yield cart.save();
        return cart;
    }
    catch (error) {
        throw new apiError_1.default(400, "something went wrong");
    }
});
const removeCartItem = (userId, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: userId });
        if (!cart) {
            throw new apiError_1.default(404, "Cart not found for this user");
        }
        const cartItem = cart.items.find((item) => item.service.toString() === serviceId.toString());
        if (!cartItem) {
            throw new apiError_1.default(401, "Item not found in the cart");
        }
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        }
        if (cartItem.quantity <= 1) {
            cart.items.filter((item) => item.service.toString() !== serviceId.toString());
            cart.save;
        }
        yield cart.save();
        return cart;
    }
    catch (error) {
        throw new apiError_1.default(400, "something went wrong");
    }
});
exports.CartServices = {
    addToCart,
    getCartWithPrices,
    updateCartItemQuantity,
    removeCartItem,
};
