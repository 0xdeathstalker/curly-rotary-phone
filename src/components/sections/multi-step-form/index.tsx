"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useModalOpen } from "@/context/modal";
import { useTeleCRMMutation } from "@/lib/hooks/useTeleCRMMutation";
import { CompanyDetailsForm } from "./company-details";
import { type FormSchema, formSchema } from "./form-schema";
import { PlanSummary } from "./plan-summary";
import { UserDetailsForm } from "./user-details";

function MultiStepForm({
  showPlanSummary = false,
}: {
  showPlanSummary?: boolean;
}) {
  const [currentStep, setCurrentStep] = React.useState<0 | 1 | 2>(0);
  const router = useRouter();
  const modalState = useModalOpen();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      name: "",
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
    {
      component: <PlanSummary />,
      label: "Plan Summary",
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
        name: form.getValues("name"),
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

    if (showPlanSummary) {
      setCurrentStep(2);
    } else {
      router.push("/pricing");
    }
  }

  React.useEffect(() => {
    // resetting only when in modal flow and when modal closes
    if (showPlanSummary && !modalState.isOpen) {
      setCurrentStep(0);
      form.reset();
    }
  }, [showPlanSummary, modalState.isOpen, form]);

  return <React.Fragment>{currentStepComponent}</React.Fragment>;
}

export { MultiStepForm };
