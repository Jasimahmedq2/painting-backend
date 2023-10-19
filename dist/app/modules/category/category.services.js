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
exports.CategoryServices = void 0;
const paint_model_1 = require("../paintService/paint.model");
const category_model_1 = require("./category.model");
const addCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.create(payload);
    return result;
});
const retrieveCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.find({});
    return result;
});
const retrieveSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_model_1.PaintService.find({ category: id });
    return result;
});
exports.CategoryServices = {
    retrieveCategories,
    addCategory,
    retrieveSingleCategory,
};
