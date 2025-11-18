"use client";

import * as React from "react";

type ModalSource = "header" | "pricing" | null;

type TModalOpenContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalSource: ModalSource;
  setModalSource: React.Dispatch<
    React.SetStateAction<"header" | "pricing" | null>
  >;
};

type SelectedPlan = {
  title: string | null;
  description: string | null;
  price: number | null;
};

type TSelectedPlanContext = {
  selectedPlan: SelectedPlan;
  setSelectedPlan: (plan: SelectedPlan) => void;
};

type User = { name: string | null; phone: string | null; email: string | null };

type TUserContext = {
  user: User;
  setUser: (user: User) => void;
};

const ModalOpenContext = React.createContext<TModalOpenContext | undefined>(
  undefined
);

const SelectedPlanContext = React.createContext<
  TSelectedPlanContext | undefined
>(undefined);

const UserContext = React.createContext<TUserContext | undefined>(undefined);

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalSource, setModalSource] = React.useState<ModalSource>(null);
  const [selectedPlan, setSelectedPlan] = React.useState<SelectedPlan>({
    title: null,
    description: null,
    price: null,
  });
  const [user, setUser] = React.useState<User>({
    email: null,
    phone: null,
    name: null,
  });

  // Restore user data from localStorage on mount
  React.useEffect(() => {
    const savedUserData = localStorage.getItem("user_data");
    if (savedUserData) {
      try {
        const parsedData = JSON.parse(savedUserData);
        setUser(parsedData);
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    }
  }, []);

  const modalOpenValue = React.useMemo(
    () => ({ isOpen, setIsOpen, modalSource, setModalSource }),
    [isOpen, modalSource]
  );

  const selectedPlanValue = React.useMemo(
    () => ({ selectedPlan, setSelectedPlan }),
    [selectedPlan]
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

function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext hook must be used within UserContextProvider"
    );
  }
  return context;
}

export { ModalContextProvider, useModalOpen, useSelectedPlan, useUserContext };
