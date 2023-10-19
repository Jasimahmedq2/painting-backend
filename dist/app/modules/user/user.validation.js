"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
const UpdateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        phoneNo: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
    }),
});
exports.UserValidationSchema = {
    UpdateUser,
};
