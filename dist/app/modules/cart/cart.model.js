"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartModel = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    items: {
        type: [
            {
                service: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: "paintService",
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
});
exports.Cart = (0, mongoose_1.model)("cart", CartModel);
