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
      id: 1,
      institution: "Ramdevbaba University Nagpur",
      degree: "Artificial Intelligence and Machine Learning",
      period: "Aug 2022 - Present",
      description:
        "Focused on advanced topics in AI and ML, including deep learning, natural language processing, and computer vision. Developed practical skills through projects and collaborations, enhancing my understanding of real-world applications.",
    },
    {
      id: 2,
      institution: "St. Paul School",
      degree: "High school Diploma",
      period: "2020 - 2022",
      description:
        "At St. Paul School, I completed my high school education with a focus on science and mathematics. This foundation has been crucial in my pursuit of higher education in technology and engineering.",
    },
  ];

  const toggleEducation = (id: number) => {
    setExpandedEducation((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          EDUCATION
        </span>
      </div>
      <div className="bg-gray-50">
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out"
              onClick={() => toggleEducation(edu.id)}
            >
              <div className="px-3 py-1">
                <div className="flex items-center justify-between">
                  <div className="pl-2 pb-1">
                    <h3 className="text-gray-900 text-sm sm:text-base">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-500">
                      {edu.period}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleEducation(edu.id);
                      }}
                      className="p-1 hover:bg-white/50 rounded-md transition-colors"
                    >
                      {expandedEducation === edu.id ? (
                        <X className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {expandedEducation === edu.id && (
                <div className="p-4 border-t border-gray-100">
                  <p className="leading-relaxed text-gray-600 text-sm">
                    {edu.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
