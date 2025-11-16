import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Controller, type UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companySizes } from "@/lib/constants";
import type { FormSchema } from "./form-schema";

export function CompanyDetailsForm({
  form,
  isSubmitting,
  handleBack,
  onSubmit,
}: {
  form: UseFormReturn<FormSchema>;
  isSubmitting: boolean;
  handleBack: () => void;
  onSubmit: (data: FormSchema) => void;
}) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldGroup className="gap-1">
          <Controller
            name="companyName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
                <Input
                  {...field}
                  id="companyName"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your Company name"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <FieldGroup className="gap-1">
          <Controller
            name="companySizes"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel htmlFor="company-size">Company Size</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="font-sans">Size</SelectLabel>
                      {companySizes.map((size) => (
                        <SelectItem
                          key={size.value}
                          value={size.value}
                          className="font-sans"
                        >
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <p className="text-sm">
          Yet to finalize your brand name? Don't worry, you can always do this
          step later!
        </p>
        <Link
          href="/pricing"
          className="group inline-flex w-fit items-center underline underline-offset-2 text-sm"
        >
          Skip it for now{" "}
          <ChevronRight className="size-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ease-in-out" />
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="grow border-[#6B7280] text-base"
            onClick={handleBack}
            disabled={isSubmitting}
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="grow bg-[#F9B934] border border-[#1E293B] text-base text-[#1A1A1A] px-3 py-2 rounded-lg font-semibold font-sans hover:bg-[#ecb131] transition-colors"
          >
            {isSubmitting ? "Saving..." : "Submit"}
          </Button>
        </div>
      </FieldSet>
    </form>
  );
}
