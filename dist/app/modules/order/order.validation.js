"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidationSchema = void 0;
const zod_1 = require("zod");
const createOrder = zod_1.z.object({
    body: zod_1.z.object({
        items: zod_1.z.array(zod_1.z.object({
            painting: zod_1.z.string({ required_error: "painting is required" }),
            quantity: zod_1.z.number({ required_error: "quantity is required" }),
        })),
        total: zod_1.z.number({ required_error: "total price is required" }),
    }),
});
exports.OrderValidationSchema = {
    createOrder,
};
