import { z } from "zod";
import { companySizes, states } from "@/lib/constants";

export const formSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: "Please enter a valid email address" })),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Enter a valid 10-digit mobile number")
    .transform((value) => `+91 ${value}`),
  state: z
    .string()
    .refine((value) => states.map((state) => state.value).includes(value), {
      message: "Please select a valid state",
    }),
  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be atleast 2 characters")
    .max(100, "Company name must be atmost 100 characters"),
  companySizes: z
    .string()
    .refine((value) => companySizes.map((size) => size.value).includes(value), {
      message: "Please select a valid company size",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
