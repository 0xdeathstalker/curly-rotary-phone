"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useModalOpen } from "@/context/modal";

function FloatingGetStarted() {
  const modalState = useModalOpen();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const getCTAButtons = () => {
      const buttons = Array.from(document.querySelectorAll("button")).filter(
        (button) => {
          const text = button.textContent?.trim() || "";
          return (
            (text === "Get Started" ||
              text.startsWith("Get Basic") ||
              text.startsWith("Get Advanced") ||
              text.startsWith("Get Pro")) &&
            !button.closest('[data-floating-cta="true"]')
          );
        }
      );
      return buttons;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const anyCTAVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!anyCTAVisible);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const buttons = getCTAButtons();
    buttons.forEach((button) => {
      observer.observe(button);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      data-floating-cta="true"
      className={`h-20 px-8 bg-white w-full flex items-center justify-center fixed sm:hidden bottom-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        size="lg"
        variant="brand"
        className="w-full"
        onClick={() => {
          modalState.setModalSource("header");
          modalState.setIsOpen(true);
        }}
      >
        Get Started
      </Button>
    </div>
  );
}

export { FloatingGetStarted };
