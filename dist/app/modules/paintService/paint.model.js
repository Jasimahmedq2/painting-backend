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
exports.PaintService = void 0;
const mongoose_1 = require("mongoose");
const category_model_1 = require("../category/category.model");
const PaintModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category",
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    painter: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    image: {
        type: String,
        required: true,
        default: "",
    },
    reviews: {
        type: [
            {
                user: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    ref: "user",
                },
                review: {
                    rating: {
                        type: Number,
                        default: 0,
                    },
                    text: {
                        type: String,
                        default: "",
                    },
                },
            },
        ],
        default: [],
    },
});
PaintModel.post("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const product = this;
        const category = yield category_model_1.Category.findById(product.category);
        if (category) {
            category.paints.push(product._id);
            yield category.save();
        }
    });
});
exports.PaintService = (0, mongoose_1.model)("paintService", PaintModel);
