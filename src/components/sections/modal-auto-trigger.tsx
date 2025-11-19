"use client";

import * as React from "react";
import { useModalOpen } from "@/context/modal";
import { MODAL_INTERVAL } from "@/lib/constants";

export function ModalAutoTrigger() {
  const { setIsOpen, setModalSource } = useModalOpen();

  React.useEffect(() => {
    const hasAutoOpened = sessionStorage.getItem("modal_auto_opened");

    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setModalSource("cta");
        setIsOpen(true);

        sessionStorage.setItem("modal_auto_opened", "true");
      }, MODAL_INTERVAL);

      return () => clearTimeout(timer);
    }
  }, [setIsOpen, setModalSource]);

  return null;
}
