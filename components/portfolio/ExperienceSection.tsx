"use client";
import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

type Job = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  points: string[];
};

const workExperience: Job[] = [
  {
    id: 1,
    company: "Ramdeobaba University (for Western Coalfields Limited)",
    position: "Lead Developer, Contract",
    period: "Jun 2026 - Jul 2026",
    location: "Remote",
    description:
      "Lead developer on the WCL recruitment examination platform, a two-person build serving ~600 candidates on exam day. Owned platform architecture, the API, the admin console, the hall-ticket portal, the exam client, and all AWS infrastructure.",
    points: [
      "Architected and shipped four applications: an Electron kiosk exam client with lockdown and integrity monitoring, a Next.js admin control room, a public hall-ticket portal, and a Bun + Express + Drizzle API.",
      "Ran the live 100-MCQ, 1-hour exam with a server-authoritative timer, instant server-side grading with negative marking, and offline-tolerant answer sync.",
      "Kept the database off the hot path with Redis-cached exam state, idempotent answer upserts, per-IP rate limiting, and tuned pools behind PgBouncer; validated with k6 runs up to 10,000 virtual users and a 1,200+ user dress rehearsal.",
      "Codified the entire ap-south-1 stack in Terraform (ALB, ACM, EC2, RDS, ElastiCache, S3, Route 53, per-tier security groups), cutting provisioning from days of manual AWS CLI work to roughly 2m40s.",
      "Built the release pipeline: GitHub Actions to Docker Hub with watchtower auto-pull, tagged releases, and self-updating Windows installers. Observability on Grafana, Prometheus, and Loki.",
      "Ran chaos drills (API-node kill, client network drop, RDS failover) with zero lost answers.",
    ],
  },
  {
    id: 2,
    company: "Absolv Networking (US)",
    position: "Software Engineer, Contract (ANDI)",
    period: "2026",
    location: "Remote",
    description:
      "One of three developers on ANDI, a relationship-intelligence product built on a milestone-based contract for a US networking agency. Contributed across ingestion, retrieval, and the assistance layer.",
    points: [
      "Built ingestion from Gmail, Calendar, and LinkedIn-derived sources into per-user stores.",
      "Implemented retrieval indexing and a contact knowledge graph over that data.",
      "Contributed relationship scoring and review-first draft assistance delivered through an MCP integration layer.",
      "Designed for privacy from the start: per-user data isolation, credentials held outside the codebase, and no autonomous sending in v1.",
    ],
  },
  {
    id: 3,
    company: "Volvox",
    position: "Software Development Intern",
    period: "Jan 2026 - Feb 2026",
    location: "Remote",
    description:
      "Worked on Sobers, a production recovery-tracking app giving sponsors and sponsees structured accountability, sobriety tracking, and visual timelines across iOS and Android.",
    points: [
      "Built the cross-platform push-notification pipeline with Expo Notifications backed by AWS SNS pub/sub, delivering reminders and accountability alerts on both platforms.",
      "Automated builds and publishing to the Google Play Store and Apple App Store via CI/CD.",
      "Added linting checks and version-control conventions to the pipeline, cutting CI/CD run time by 28%.",
      "Reengineered the API data layer around TanStack Query with caching, request deduplication, and background refetch, replacing ad-hoc fetch configuration.",
    ],
  },
  {
    id: 4,
    company: "Kyvra Labs",
    position: "AI / Cloud Engineering Intern",
    period: "Nov 2025 - Jan 2026",
    location: "Remote",
    description:
      "Built and operated the AI document pipeline and its observability stack, plus the deployment workflow for the company site.",
    points: [
      "Engineered a RAG pipeline on AWS Lambda triggered by EventBridge, running OCR and text reformatting with open-source models fine-tuned on client data using Unsloth, with outputs stored and re-validated weekly.",
      "Implemented AI-agent monitoring and observability with Prometheus, Grafana, and Langfuse, including custom logging.",
      "Configured Docker and version-control-based workflows for automated deployment of the company website.",
      "Optimized the data-processing flow, reducing hosting and AI-model costs.",
    ],
  },
  {
    id: 5,
    company: "Freelance",
    position: "Software Engineer",
    period: "2025 - Present",
    location: "Remote",
    description:
      "Client work across web and mobile: booking platforms with payments, business Android apps, and messaging automation.",
    points: [
      "TurfBuddie: a turf booking website with slot scheduling and Razorpay payment integration, live in production.",
      "Fleet: an Android app for a business owner to manage vehicles, staff, billing, and payments over REST APIs on Firebase.",
      "A WhatsApp agent for a grocery shop owner that surfaces customer requests directly to the owner.",
    ],
  },
  {
    id: 6,
    company: "Google Developer Group RBU",
    position: "Technical Lead",
    period: "2024 - Present",
    location: "Nagpur, India",
    description:
      "Lead the technical side of the campus GDG chapter: shipping the community's apps and infrastructure, and running workshops on GitHub, backend engineering, and AI workflows.",
    points: [
      "Delivered 4+ production cross-platform apps with scalable backends and cloud-native infrastructure; automated CI/CD with Docker and GitHub Actions, cutting deployment time by 60%.",
      "Led technical workshops for 5,000+ online and 2,000+ offline participants.",
      "Launched a dual-role member/student app on Expo and Supabase with Clerk Google Auth and custom real-time notifications, production-ready in 10 days, 67% ahead of deadline.",
      "Deployed 4 dynamic websites for GDG Campus events, cutting manual workload by 40%.",
    ],
  },
];

export function ExperienceSection() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (jobId: number) => {
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
              <div className="px-3 py-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="pl-2 pb-1">
                    <h3 className=" text-gray-900  text-sm sm:text-base">
                      {job.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {job.position}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[12px] text-gray-500 text-right">
                      {job.period}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleJob(job.id);
                      }}
                      className="p-1 hover:bg-white/50 rounded-md transition-colors"
                      aria-label={
                        expandedJob === job.id ? "Collapse" : "Expand"
                      }
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
                <div className="p-4 border-t border-gray-100 space-y-3">
                  <p className="text-[11px] uppercase tracking-wide text-gray-400">
                    {job.location}
                  </p>
                  <p className=" leading-relaxed text-gray-600 text-sm">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                      >
                        <span className="absolute left-0 text-gray-400">–</span>
                        {point}
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
