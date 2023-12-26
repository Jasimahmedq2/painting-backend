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
exports.PaintServices = exports.findProducts = void 0;
const paint_model_1 = require("./paint.model");
const paint_utility_1 = require("./paint.utility");
const addPaintService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.create(payload);
    return result;
});
const retrievePaintServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.find({});
    return result;
});
const findProducts = (query, page, perPage, sortField, sortOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = paint_utility_1.PaintServiceUtility.buildFilter(query);
    const sort = { [sortField]: sortOrder };
    const totalResults = yield paint_model_1.PaintService.countDocuments(filter);
    const results = yield paint_model_1.PaintService.find(filter)
        .sort(sort)
        .skip((page - 1) * perPage)
        .limit(perPage)
        .lean()
        .exec();
    return {
        totalResults,
        results,
    };
});
exports.findProducts = findProducts;
const retrieveSinglePaint = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.findById(id).populate('painter');
    return result;
});
const removePaintService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.findByIdAndDelete(id);
    return result;
});
const updatePaintService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.findOneAndUpdate({ _id: id }, payload);
    return result;
});
exports.PaintServices = {
    addPaintService,
    retrievePaintServices,
    retrieveSinglePaint,
    removePaintService,
    updatePaintService,
    findProducts: exports.findProducts,
};
