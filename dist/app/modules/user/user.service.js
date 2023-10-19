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
exports.UserServices = void 0;
const apiError_1 = __importDefault(require("../../../errors/apiError"));
const user_models_1 = require("./user.models");
const retrieveProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const Profile = yield user_models_1.User.findById(userId);
    return Profile;
});
const retrievePainter = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_models_1.User.find({ role: "painter" });
    return result;
});
const updateProfile = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const Profile = yield user_models_1.User.findOneAndUpdate({ _id: userId }, payload, {
        new: true,
    });
    return Profile;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_models_1.User.find({});
    return result;
});
const changeRole = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId);
    if (["admin", "customer", "painter"].includes(role)) {
        const updateUser = yield user_models_1.User.findByIdAndUpdate(userId, { role }, { new: true });
        if (!updateUser) {
            throw new apiError_1.default(400, "error occurred");
        }
        return updateUser;
    }
    else {
        throw new apiError_1.default(400, "invalid role");
    }
});
exports.UserServices = {
    retrieveProfile,
    updateProfile,
    retrievePainter,
    getAllUser,
    changeRole,
};
