"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsLetterValidation = void 0;
const zod_1 = require("zod");
const subscribe = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "email is required" }).email(),
    }),
});
exports.NewsLetterValidation = {
    subscribe,
};
