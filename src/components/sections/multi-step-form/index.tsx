"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useModalOpen, useUserContext } from "@/context/modal";
import { useTeleCRMMutation } from "@/lib/hooks/useTeleCRMMutation";
import { setCookie } from "@/lib/utils/cookies";
import { type FormSchema, formSchema } from "./form-schema";
import { PlanSummary } from "./plan-summary";
import { UserDetailsForm } from "./user-details";

function MultiStepForm({
  showPlanSummary = false,
}: {
  showPlanSummary?: boolean;
}) {
  const [currentStep, setCurrentStep] = React.useState<0 | 1>(0);
  const router = useRouter();
  const modalState = useModalOpen();
  const userState = useUserContext();

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
          handleNext={onSubmit}
          isSubmitting={teleCRMMutation.isPending}
        />
      ),
      label: "User details",
    },
    {
      component: <PlanSummary />,
      label: "Plan Summary",
    },
  ];
  const currentStepComponent = content[currentStep].component;

  async function onSubmit() {
    const step1Fields = ["name", "email", "phone", "state"] as const;
    const isStep1Valid = await form.trigger(step1Fields);

    if (isStep1Valid) {
      const { name, email, phone, state } = form.getValues();

      await teleCRMMutation.mutateAsync({
        name,
        email,
        phone,
        state,
      });

      const userData = { name, email, phone };
      userState.setUser(userData);

      try {
        localStorage.setItem("user_data", JSON.stringify(userData));
      } catch (error) {
        console.error("Failed to save user data to localStorage.", error);
      }
      setCookie("form_completed", "true", 1); // valid for 1 day

      if (showPlanSummary) {
        setCurrentStep(1);
      } else {
        router.push("/pricing");
      }
    }
  }

  React.useEffect(() => {
    // resetting only when in modal flow and when modal closes
    if (showPlanSummary && !modalState.isOpen) {
      setCurrentStep(0);
      form.reset();
      // Note: We don't clear user data here as it's needed for the pricing page
    }
  }, [showPlanSummary, modalState.isOpen, form]);

  return <React.Fragment>{currentStepComponent}</React.Fragment>;
}

export { MultiStepForm };
