"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidationSchema = void 0;
const zod_1 = require("zod");
const auth_constant_1 = require("../auth/auth.constant");
const UpdateUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        phoneNo: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
    }),
});
const UpdateUserRole = zod_1.z.object({
    body: zod_1.z.object({
        role: zod_1.z.enum([...auth_constant_1.UserRoleConstant]),
    }),
});
exports.AdminValidationSchema = {
    UpdateUser,
    UpdateUserRole,
};
