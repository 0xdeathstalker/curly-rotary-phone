import { z } from "zod";
import { COMPANY_SIZES, STATES } from "@/lib/constants";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .toLowerCase()
    .min(2, "Name must be atleast 2 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
  countryCode: z.string().min(1, "Please select a country code"),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  state: z
    .string()
    .refine((value) => STATES.map((state) => state.value).includes(value), {
      message: "Please select a valid state",
    }),
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be atleast 2 characters")
    .max(100, "Company name must be atmost 100 characters"),
  companySizes: z
    .string()
    .refine(
      (value) => COMPANY_SIZES.map((size) => size.value).includes(value),
      {
        message: "Please select a valid company size",
      }
    ),
});

export type FormSchema = z.infer<typeof formSchema>;
