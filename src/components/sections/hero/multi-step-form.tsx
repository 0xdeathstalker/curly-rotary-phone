"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { StateSelection } from "@/components/sections/state-select";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { states } from "@/lib/constants";

const formSchema = z.object({
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
});

type FormSchema = z.infer<typeof formSchema>;

function MultiStepForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      state: "",
    },
  });

  function onSubmit(data: FormSchema) {
    console.log("[submitted-form-data] = ", { data });
  }

  return (
    <form
      className="border rounded-md shadow-md p-8 w-full md:w-auto md:p-12 md:grow"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-9">
        Register your private ltd. company
      </h1>

      <FieldSet>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <FieldGroup>
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="gap-1">
                <FieldLabel htmlFor="phone">Mobile number</FieldLabel>
                <Input
                  {...field}
                  id="phone"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your mobile number"
                  autoComplete="off"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  type="tel"
                  maxLength={10}
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, "");
                    field.onChange(digitsOnly);
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <FieldGroup>
          <Controller
            name="state"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="gap-1">
                <FieldLabel>State</FieldLabel>
                <StateSelection
                  isInvalid={fieldState.invalid}
                  value={field.value}
                  onValueChange={field.onChange}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button>Submit</Button>
      </FieldSet>
    </form>
  );
}

export { MultiStepForm };
