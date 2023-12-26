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
exports.NewsLetterServices = void 0;
const user_models_1 = require("../user/user.models");
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const newsLetter_model_1 = require("./newsLetter.model");
const subscribe = (email, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_models_1.User.findById(userId);
    if ((user === null || user === void 0 ? void 0 : user.email.toString()) !== email.toString()) {
        throw new apiError_1.default(400, "there required your logged-in email");
    }
    const alreadySubscribed = yield newsLetter_model_1.NewsLetter.findOne({ email: email });
    if (alreadySubscribed) {
        throw new apiError_1.default(400, "you have subscribed the newsLetter already!");
    }
    const result = yield newsLetter_model_1.NewsLetter.create({ email });
    return result;
});
exports.NewsLetterServices = {
    subscribe,
};
