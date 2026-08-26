"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "techstack", label: "TECH STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "resources", label: "RESOURCES" },
  { id: "education", label: "EDUCATION" },
  { id: "recognition", label: "RECOGNITION" },
  { id: "recommendations", label: "RECOMMENDATIONS" },
  { id: "extras", label: "EXTRAS" },
  { id: "links", label: "LINKS" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("about");
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeBtn = buttonRefs.current[activeSection];
    if (activeBtn && navRef.current) {
      const nav = navRef.current;
      const btnRect = activeBtn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const offsetTop = btnRect.top - navRect.top + nav.scrollTop;
      nav.scrollTo({
        top: offsetTop - navRect.height / 2 + btnRect.height / 2,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="hidden xl:flex fixed right-4 2xl:right-8 top-1/2 -translate-y-1/2 flex-col items-center z-50 max-h-[80vh]">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10" />
      <nav
        ref={navRef}
        className="flex flex-col items-center overflow-y-auto py-8"
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            ref={(el) => { buttonRefs.current[id] = el; }}
            onClick={() => handleClick(id)}
            style={{ writingMode: "vertical-rl" }}
            className={`text-sm py-3 transition-all duration-300 cursor-pointer whitespace-nowrap rotate-180 ${
              activeSection === id
                ? "text-gray-900 font-semibold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
