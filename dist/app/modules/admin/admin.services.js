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
exports.AdminServices = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const user_models_1 = require("../user/user.models");
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_models_1.User.findByIdAndDelete(userId);
    return result;
});
const updateUser = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_models_1.User.findOneAndUpdate({ _id: userId }, payload, {
        new: true,
    });
    return result;
});
const updateUserRole = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield user_models_1.User.findById(userId);
    if (!findUser) {
        throw new apiError_1.default(404, "user doesn't found");
    }
    findUser.role = role;
    const result = yield findUser.save();
    return result;
});
exports.AdminServices = {
    deleteUser,
    updateUser,
    updateUserRole,
};
