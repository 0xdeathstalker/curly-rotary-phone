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
  handleBack,
  onSubmit,
}: {
  form: UseFormReturn<FormSchema>;
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
                      <SelectLabel>Size</SelectLabel>
                      {companySizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
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

        <div className="flex items-center gap-4">
          <Button variant="outline" className="grow" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" className="grow">
            Submit
          </Button>
        </div>
      </FieldSet>
    </form>
  );
}
