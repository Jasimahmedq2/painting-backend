import { z } from "zod";

const subscribe = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required" }).email(),
  }),
});

export const NewsLetterValidation = {
  subscribe,
};