"use client";

import * as React from "react";

type TModalOpenContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SelectedPlan = {
  title: string;
  description: string;
  price: string;
};

type TSelectedPlanContext = {
  selectedPlan: SelectedPlan | null;
  setSelectedPlan: (plan: SelectedPlan) => void;
};

const ModalOpenContext = React.createContext<TModalOpenContext | undefined>(
  undefined
);

const SelectedPlanContext = React.createContext<
  TSelectedPlanContext | undefined
>(undefined);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<SelectedPlan | null>(
    null
  );

  const modalOpenValue = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  const selectedPlanValue = React.useMemo(
    () => ({ selectedPlan, setSelectedPlan }),
    [selectedPlan]
  );

  return (
    <ModalOpenContext.Provider value={modalOpenValue}>
      <SelectedPlanContext.Provider value={selectedPlanValue}>
        {children}
      </SelectedPlanContext.Provider>
    </ModalOpenContext.Provider>
  );
}

function useModalOpen() {
  const context = React.useContext(ModalOpenContext);
  if (context === undefined) {
    throw new Error(
      "useModalOpen hook must be used within ModalContextProvider"
    );
  }
  return context;
}

function useSelectedPlan() {
  const context = React.useContext(SelectedPlanContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedPlan hook must be used within ModalContextProvider"
    );
  }
  return context;
}

export { ModalContextProvider, useModalOpen, useSelectedPlan };
