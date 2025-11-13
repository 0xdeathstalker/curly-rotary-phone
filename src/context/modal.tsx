"use client";

import * as React from "react";

const ModalContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => null });

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalState() {
  return React.useContext(ModalContext);
}

export { ModalContextProvider, useModalState };
