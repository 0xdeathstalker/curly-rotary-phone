"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CompanyDetailsForm } from "./company-details";
import { type FormSchema, formSchema } from "./form-schema";
import { UserDetailsForm } from "./user-details";
import { useTeleCRMMutation } from "@/lib/hooks/useTelecrmMutation";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState<0 | 1>(0);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      email: "",
      phone: "",
      state: "",
      companyName: "",
      companySizes: "",
    },
  });

  const teleCRMMutation = useTeleCRMMutation();

  const content = [
    {
      component: (
        <UserDetailsForm
          form={form}
          handleNext={nextStep}
          isSubmitting={teleCRMMutation.isPending}
        />
      ),
      label: "User details",
    },
    {
      component: (
        <CompanyDetailsForm
          form={form}
          handleBack={previousStep}
          onSubmit={onSubmit}
          isSubmitting={teleCRMMutation.isPending}
        />
      ),
      label: "Company details",
    },
  ];
  const currentStepComponent = content[currentStep].component;

  function previousStep() {
    setCurrentStep(0);
  }

  async function nextStep() {
    const isStep1Valid = await form.trigger(["email", "phone", "state"]);

    if (isStep1Valid) {
      // TODO: make POST request to telecrm api
      await teleCRMMutation.mutateAsync({
        email: form.getValues("email"),
        phone: form.getValues("phone"),
        state: form.getValues("state"),
      });

      setCurrentStep(1);
    }
  }

  async function onSubmit(data: FormSchema) {
    // TODO: make POST request to telecrm api
    await teleCRMMutation.mutateAsync({
      email: form.getValues("email"),
      phone: form.getValues("phone"),
      company_name: form.getValues("companyName"),
      company_size: form.getValues("companySizes"),
    });

    console.log("[submitted-form-data] = ", { data });
  }

  return (
    <Card className="w-full gap-9 py-8">
      <CardHeader className="text-2xl md:text-4xl font-bold px-8">
        Register your private ltd. company
      </CardHeader>
      <CardContent className="px-8">{currentStepComponent}</CardContent>
    </Card>
  );
}

export { MultiStepForm };
