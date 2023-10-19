"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingValidation = void 0;
const zod_1 = require("zod");
const addShipping = zod_1.z.object({
    body: zod_1.z.object({
        street: zod_1.z.string({
            required_error: "street is required",
        }),
        city: zod_1.z.string({
            required_error: "city is required",
        }),
        postalCode: zod_1.z.string({
            required_error: "postalCode is required",
        }),
        country: zod_1.z.string({
            required_error: "country is required",
        }),
        phoneNo: zod_1.z.string({
            required_error: "phoneNumber is required",
        }),
    }),
});
exports.ShippingValidation = {
    addShipping,
};
