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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const retrieveProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const result = yield user_service_1.UserServices.retrieveProfile(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve user profile data",
        data: result,
    });
}));
const retrievePainter = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.retrievePainter();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve painter user",
        data: result,
    });
}));
const updateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const updateInfo = __rest(req.body, []);
    const result = yield user_service_1.UserServices.updateProfile(userId, updateInfo);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully updated user profile",
        data: result,
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user;
    const updateInfo = __rest(req.body, []);
    const result = yield user_service_1.UserServices.getAllUser();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve users",
        data: result,
    });
}));
const changeRole = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { role } = req.body;
    const result = yield user_service_1.UserServices.changeRole(userId, role);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully update role",
        data: result,
    });
}));
const RemoveUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_service_1.UserServices.RemoveUserFromDB(userId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully delete the user",
        data: result,
    });
}));
exports.UserControllers = {
    retrieveProfile,
    updateProfile,
    retrievePainter,
    getAllUser,
    changeRole,
    RemoveUserFromDB,
};
