"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    items: [
        {
            painting: { type: mongoose_1.Schema.Types.ObjectId, ref: "paintService" },
            quantity: Number,
        },
    ],
    total: Number,
    status: {
        type: String,
        enum: ["pending", "accepted", "completed", "canceled"],
        default: "pending",
    },
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)("order", orderSchema);
