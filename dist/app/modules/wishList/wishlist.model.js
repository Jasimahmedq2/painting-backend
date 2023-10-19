"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishList = void 0;
const mongoose_1 = require("mongoose");
const wishListSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    paintings: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "pantService" }],
}, { timestamps: true });
exports.wishList = (0, mongoose_1.model)("whishList", wishListSchema);
