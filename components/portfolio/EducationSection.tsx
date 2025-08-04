// components/portfolio/EducationSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export function EducationSection() {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(
    null
  );

  const education = [
    {
      institution: "Berlin State University",
      degree: "Undergraduate in UI/UX",
      period: "Aug 24 - Present",
      icon: "🎓",
      description:
        "Focused on user-centered design, prototyping, and digital interfaces. Collaborated on design projects and participated in workshops using tools like Figma and Adobe XD.",
    },
    {
      institution: "GreenFields High School",
      degree: "High school diploma",
      period: "Sep 22 - Aug 24",
      icon: "🏫",
      description:
        "At GreenFields High School, I excelled in subjects such as Graphic Design and Technology, which sparked my interest in UI/UX. I also engaged in extracurricular activities, including leading the school's digital design club and creating digital assets for school events.",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          EDUCATION
        </span>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-between p-4 bg-white rounded-lg border cursor-pointer hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
              onClick={() =>
                setExpandedEducation(expandedEducation === index ? null : index)
              }
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-xl">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 text-sm">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{edu.period}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedEducation === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {expandedEducation === index && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg border animate-in slide-in-from-top-2 duration-200">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-sm">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {edu.institution}
                      </h4>
                      <p className="text-gray-600 text-sm">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{edu.period}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedEducation(null);
                      }}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
