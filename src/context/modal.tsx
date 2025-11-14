"use client";

import * as React from "react";

type TModalOpenContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SelectedPlan = {
  title: string;
  description: string;
  price: number;
};

type TSelectedPlanContext = {
  selectedPlan: SelectedPlan | null;
  setSelectedPlan: (plan: SelectedPlan) => void;
};

type User = { name: string; phone: string; email: string };

type TUserContext = {
  user: User;
  setUser: (user: User) => void;
};

const ModalOpenContext = React.createContext<TModalOpenContext | undefined>(
  undefined,
);

const SelectedPlanContext = React.createContext<
  TSelectedPlanContext | undefined
>(undefined);

const UserContext = React.createContext<TUserContext | undefined>(undefined);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<SelectedPlan | null>(
    null,
  );
  const [user, setUser] = React.useState<User>({
    email: "",
    phone: "",
    name: "",
  });

  const modalOpenValue = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  const selectedPlanValue = React.useMemo(
    () => ({ selectedPlan, setSelectedPlan }),
    [selectedPlan],
  );

  const userValue = React.useMemo(() => ({ user, setUser }), [user]);

  return (
    <ModalOpenContext.Provider value={modalOpenValue}>
      <SelectedPlanContext.Provider value={selectedPlanValue}>
        <UserContext.Provider value={userValue}>
          {children}
        </UserContext.Provider>
      </SelectedPlanContext.Provider>
    </ModalOpenContext.Provider>
  );
}

function useModalOpen() {
  const context = React.useContext(ModalOpenContext);
  if (context === undefined) {
    throw new Error(
      "useModalOpen hook must be used within ModalContextProvider",
    );
  }
  return context;
}

function useSelectedPlan() {
  const context = React.useContext(SelectedPlanContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedPlan hook must be used within ModalContextProvider",
    );
  }
  return context;
}

function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext hook must be used within UserContextProvider",
    );
  }
  return context;
}

export { ModalContextProvider, useModalOpen, useSelectedPlan, useUserContext };
