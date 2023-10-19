"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paintValidationSchema = void 0;
const zod_1 = require("zod");
const addPaintSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "service name is required" }),
        description: zod_1.z.string({
            required_error: "service description is required",
        }),
        price: zod_1.z.string({
            required_error: "service price is required",
        }),
        category: zod_1.z.string({
            required_error: "category id is required",
        }),
        painter: zod_1.z.string({
            required_error: "painter id is required",
        }),
        image: zod_1.z.string({
            required_error: "service image is required",
        }),
    }),
});
const updatePaintSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        painter: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
    }),
});
exports.paintValidationSchema = {
    addPaintSchema,
    updatePaintSchema,
};
