"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    amount: {
        type: Number,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    serviceIds: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "paintService",
        },
    ],
    transactionId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending",
    },
    paymentGatewayData: {
        type: JSON,
    },
}, { timestamps: true });
exports.Payment = (0, mongoose_1.model)("payment", paymentSchema);
