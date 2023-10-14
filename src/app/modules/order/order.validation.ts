import { z } from "zod";

const createOrder = z.object({
  body: z.object({
    items: z.array(
      z.object({
        painting: z.string({ required_error: "painting is required" }),
        quantity: z.number({ required_error: "quantity is required" }),
      })
    ),
    total: z.number({ required_error: "total price is required" }),
  }),
});

export const OrderValidationSchema = {
  createOrder,
};
