"use client";

import * as React from "react";

function Sidebar() {
  const [activeSection, setActiveSection] = React.useState("overview");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="hidden lg:block sticky shrink-0">
      <div className="bg-[#eef4f9] rounded-lg sticky top-24">
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
      className={`px-6 py-6 cursor-pointer border-b last:border-b-0 border-[rgba(29,54,77,0.4)] ${
        active
          ? "bg-linear-to-r from-[rgba(107,114,128,0.42)] to-[rgba(238,244,249,0)] first:rounded-tl-lg last:rounded-bl-lg"
          : ""
      }`}
      onClick={onClick}
    >
      <p
        className={`text-lg font-sans ${
          active ? "font-bold" : "font-normal"
        } text-black`}
      >
        {title}
      </p>
    </div>
  );
}

export { Sidebar };
