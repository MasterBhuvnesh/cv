"use client";
import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export function ExperienceSection() {
  const [expandedJob, setExpandedJob] = useState(null);

  const workExperience = [
    {
      id: 1,
      company: "GDG Campus",
      position: "Senior App developer",
      period: "Oct 2023 - Present",
      description:
        "Experienced in building scalable, cross-platform apps with clean architecture and real-time features focused on practical, high-impact solutions.",
    },
    {
      id: 2,
      company: "Freelance",
      position: "App | Web Developer",
      period: "Aug 2022 - Present",
      description:
        "Developed custom websites and applications for various clients, focusing on user experience and performance optimization.",
    },
  ];

  const toggleJob = (jobId: any) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base  inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          EXPERIENCE
        </span>
      </div>
      <div className=" bg-gray-50">
        <div className="space-y-4 ">
          {workExperience.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out"
              onClick={() => toggleJob(job.id)}
            >
              <div className="px-3 py-1">
                <div className="flex items-center justify-between">
                  <div className="pl-2 pb-1">
                    <h3 className=" text-gray-900">{job.company}</h3>
                    <p className="text-sm text-gray-600">{job.position}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[12px]  text-gray-500">
                      {job.period}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleJob(job.id);
                      }}
                      className="p-1 hover:bg-white/50 rounded-md transition-colors"
                    >
                      {expandedJob === job.id ? (
                        <X className="w-4 h-4 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {expandedJob === job.id && (
                <div className="p-4 border-t border-gray-100">
                  <p className=" leading-relaxed text-gray-600 text-sm">
                    {job.description}
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
