import { z } from "zod";

const addPaintSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "service name is required" }),
    description: z.string({
      required_error: "service description is required",
    }),
    price: z.string({
      required_error: "service price is required",
    }),
    category: z.string({
      required_error: "category id is required",
    }),
    painter: z.string({
      required_error: "painter id is required",
    }),
    image: z.string({
      required_error: "service image is required",
    }),
  }),
});
const updatePaintSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.string().optional(),
    category: z.string().optional(),
    painter: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const paintValidationSchema = {
  addPaintSchema,
  updatePaintSchema,
};
