"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const PaintCategoryModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    paints: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "paintService",
            },
        ],
    },
    image: {
        type: String,
        required: true,
        default: "",
    },
});
exports.Category = (0, mongoose_1.model)("category", PaintCategoryModel);
