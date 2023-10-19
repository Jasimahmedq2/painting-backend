"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidationSchema = void 0;
const zod_1 = require("zod");
const addCategory = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "category name is required" }),
        paints: zod_1.z.string().optional(),
        image: zod_1.z.string({ required_error: "image is required" }),
    }),
});
exports.CategoryValidationSchema = {
    addCategory,
};
