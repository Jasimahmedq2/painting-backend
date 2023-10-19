"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddress = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    isFilled: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.ShippingAddress = (0, mongoose_1.model)("shippingAddress", addressSchema);
