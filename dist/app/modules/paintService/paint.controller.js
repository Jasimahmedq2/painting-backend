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
exports.PaintControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const paint_services_1 = require("./paint.services");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const addPaintService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_services_1.PaintServices.addPaintService(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully created a new art service",
        data: result,
    });
}));
const retrievePaintServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield paint_services_1.PaintServices.retrievePaintServices();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve  services",
        data: result,
    });
}));
const retrieveSinglePaint = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield paint_services_1.PaintServices.retrieveSinglePaint(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully retrieve a  service",
        data: result,
    });
}));
const removePaintService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield paint_services_1.PaintServices.removePaintService(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully remove a  service",
        data: result,
    });
}));
const updatePaintService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateInfo = __rest(req.body, []);
    const result = yield paint_services_1.PaintServices.updatePaintService(id, updateInfo);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully update a  service",
        data: result,
    });
}));
const findProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.query, { page, perPage, sortField, sortOrder } = _a, query = __rest(_a, ["page", "perPage", "sortField", "sortOrder"]);
    const result = yield paint_services_1.PaintServices.findProducts(query, page, perPage, sortField, sortOrder);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "successfully update a  service",
        data: result,
    });
}));
exports.PaintControllers = {
    addPaintService,
    retrievePaintServices,
    retrieveSinglePaint,
    removePaintService,
    updatePaintService,
    findProducts,
};
