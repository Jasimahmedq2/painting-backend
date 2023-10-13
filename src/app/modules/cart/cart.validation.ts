import { z } from "zod";

const addToCart = z.object({
  user: z.string({
    required_error: "user is required",
  }),
});
