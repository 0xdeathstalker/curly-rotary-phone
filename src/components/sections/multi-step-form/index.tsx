"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CompanyDetailsForm } from "./company-details";
import { type FormSchema, formSchema } from "./form-schema";
import { UserDetailsForm } from "./user-details";

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

  const content = [
    {
      component: <UserDetailsForm form={form} handleNext={nextStep} />,
      label: "User details",
    },
    {
      component: (
        <CompanyDetailsForm
          form={form}
          handleBack={previousStep}
          onSubmit={onSubmit}
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
      setCurrentStep(1);
    }
  }

  function onSubmit(data: FormSchema) {
    // TODO: make POST request to telecrm api

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
