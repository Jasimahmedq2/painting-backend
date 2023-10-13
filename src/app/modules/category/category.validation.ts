import { array, z } from "zod";

const addCategory = z.object({
  body: z.object({
    name: z.string({ required_error: "category name is required" }),
    paints: z.string().optional(),
    images: z.string({ required_error: "image is required" }),
  }),
});

export const CategoryValidationSchema = {
  addCategory,
};
