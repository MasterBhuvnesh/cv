"use client";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export function ExtrasSection() {
  const [expandedExtras, setExpandedExtras] = useState<number | null>(null);

  const extras = [
    {
      id: 1,
      Fields: "GDG RBU Nagpur Campus",
      domain: "Google Developer Group",
      description: [
        "Organized & led a web development workshop for 200+ beginners, covering fundamentals to practical implementation.",
        "Developed 4 dynamic websites for club (GDG Campus) events, handling end-to-end design, development, and deployment reducing manual workload by 40%.",
        "Conducted an Android Dev seminar, demoing Expo + API integration; helped 100+ attendees grasp app architecture and real-time data flow.",
        "Currently Active member of GDG RBU Campus.",
      ],
    },
  ];

  const toggleExtras = (id: number) => {
    setExpandedExtras((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          EXTRA CURRICULAR ACTIVITIES
        </span>
      </div>
      <div className="bg-gray-50">
        <div className="space-y-4">
          {extras.map((extra) => (
            <div
              key={extra.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out"
              onClick={() => toggleExtras(extra.id)}
            >
              <div className="px-3 py-1">
                <div className="flex items-center justify-between">
                  <div className="pl-2 pb-1">
                    <h3 className="text-gray-900 text-sm sm:text-base">
                      {extra.Fields}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {extra.domain}
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExtras(extra.id);
                      }}
                      className="p-1 hover:bg-white/50 rounded-md transition-colors"
                    >
                      {expandedExtras === extra.id ? (
                        <X className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {expandedExtras === extra.id && (
                <div className="p-4 border-t border-gray-100">
                  <ul className="space-y-2">
                    {extra.description.map((point, index) => (
                      <li
                        key={index}
                        className="leading-relaxed text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
