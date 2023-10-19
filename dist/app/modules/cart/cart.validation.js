"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const addToCart = zod_1.z.object({
    user: zod_1.z.string({
        required_error: "user is required",
    }),
});
