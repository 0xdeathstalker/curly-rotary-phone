"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useModalState } from "@/context/modal";
import { useTeleCRMMutation } from "@/lib/hooks/useTeleCRMMutation";
import { CompanyDetailsForm } from "./company-details";
import { type FormSchema, formSchema } from "./form-schema";
import { UserDetailsForm } from "./user-details";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState<0 | 1>(0);
  const router = useRouter();
  const modalState = useModalState();

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
      await teleCRMMutation.mutateAsync({
        email: form.getValues("email"),
        phone: form.getValues("phone"),
        state: form.getValues("state"),
      });

      setCurrentStep(1);
    }
  }

  async function onSubmit(_data: FormSchema) {
    await teleCRMMutation.mutateAsync({
      email: form.getValues("email"),
      phone: form.getValues("phone"),
      company_name: form.getValues("companyName"),
      company_size: form.getValues("companySizes"),
    });

    if (!modalState.isOpen) router.push("/pricing");
  }

  return <React.Fragment>{currentStepComponent}</React.Fragment>;
}

export { MultiStepForm };
