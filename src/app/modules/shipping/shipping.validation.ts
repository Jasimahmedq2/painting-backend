import { z } from "zod";

const addShipping = z.object({
  body: z.object({
    street: z.string({
      required_error: "street is required",
    }),
    city: z.string({
      required_error: "city is required",
    }),
    postalCode: z.string({
      required_error: "postalCode is required",
    }),
    country: z.string({
      required_error: "country is required",
    }),
    phoneNo: z.string({
      required_error: "phoneNumber is required",
    }),
  }),
});

export const ShippingValidation = {
  addShipping,
};
