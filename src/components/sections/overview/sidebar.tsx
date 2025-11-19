"use client";

import * as React from "react";

function Sidebar() {
  const [activeSection, setActiveSection] = React.useState("overview");
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const sections = [
      "overview",
      "types",
      "requirements",
      "process",
      "documents",
      "benefits",
      "faq",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // observing all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden lg:block w-[256px] shrink-0">
      <div className="bg-[#eef4f9] rounded-lg sticky top-32">
        <SidebarItem
          title="Private Limited Company"
          active={activeSection === "overview"}
          onClick={() => scrollToSection("overview")}
        />
        <SidebarItem
          title="Pvt Types"
          active={activeSection === "types"}
          onClick={() => scrollToSection("types")}
        />
        <SidebarItem
          title="Requirements"
          active={activeSection === "requirements"}
          onClick={() => scrollToSection("requirements")}
        />
        <SidebarItem
          title="Pvt Process"
          active={activeSection === "process"}
          onClick={() => scrollToSection("process")}
        />
        <SidebarItem
          title="Documents"
          active={activeSection === "documents"}
          onClick={() => scrollToSection("documents")}
        />
        <SidebarItem
          title="Benefits"
          active={activeSection === "benefits"}
          onClick={() => scrollToSection("benefits")}
        />
        <SidebarItem
          title="FAQ"
          active={activeSection === "faq"}
          onClick={() => scrollToSection("faq")}
        />
      </div>
    </div>
  );
}

function SidebarItem({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: forced behaviour
    // biome-ignore lint/a11y/useKeyWithClickEvents: forced behaviour
    <div
      className={`px-6 py-6 cursor-pointer border-b last:border-b-0 border-[#1D364D]/30 ${
        active
          ? "bg-linear-to-r from-[rgba(107,114,128,0.42)] to-[rgba(238,244,249,0)] first:rounded-tl-lg last:rounded-bl-lg"
          : ""
      }`}
      onClick={onClick}
    >
      <p
        className={`text-lg font-sans ${
          active ? "font-bold" : "font-normal"
        } text-[#1E293B]`}
      >
        {title}
      </p>
    </div>
  );
}

export { Sidebar };
