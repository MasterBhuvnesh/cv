"use client";
import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  icon: string;
  period: string;
  tags: string[];
  featured?: boolean;
  description: string;
  highlights: string[];
  stack: string[];
  image?: string;
  link?: string;
  playstore?: string;
  github?: string;
};

const CATEGORIES = [
  "Featured",
  "All",
  "Full-Stack",
  "DevOps & Cloud",
  "Mobile",
  "AI",
];

const projects: Project[] = [
  {
    title: "WCL Examination Platform",
    featured: true,
    icon: "WCL",
    period: "Jun 2026 - Jul 2026",
    tags: ["Full-Stack", "DevOps & Cloud"],
    description:
      "Enterprise examination infrastructure built for the Western Coalfields Limited recruitment exam at Ramdeobaba University. Four applications, ~600 candidates, a fully codified AWS stack.",
    highlights: [
      "Four-application platform: an Electron fullscreen kiosk exam client (lockdown, integrity monitoring, offline-tolerant answer sync, self-update via electron-updater), a Next.js admin control room, a public hall-ticket portal with PDF generation, and a Bun + Express + Drizzle API.",
      "Served a 100-MCQ, 1-hour exam to ~600 registered candidates with a server-authoritative timer, instant server-side grading with negative marking, and auto-submit at the deadline.",
      "Load engineering: a 1,200+ concurrent-user dress rehearsal and scripted k6 runs up to 10,000 virtual users. Redis-cached hot exam state keeps the database off the hot path, answer upserts are idempotent on a monotonic client sequence, with per-IP rate limiting and tuned pools behind PgBouncer.",
      "Chaos drills covering API-node kill, client network drop, and RDS failover finished with zero lost answers.",
      "Whole stack as Terraform IaC in ap-south-1: ALB with host-based routing across four target groups, ACM wildcard TLS, EC2, RDS PostgreSQL, ElastiCache Redis, S3 with a least-privilege IAM uploader, Route 53, and security-group-per-tier isolation. A stack that originally took days of manual AWS CLI work now provisions in about 2m40s.",
      "Release engineering via GitHub Actions to Docker Hub with watchtower auto-pull, tagged releases, and Windows installers published to GitHub Releases. Observability on Grafana, Prometheus, and Loki.",
    ],
    stack: [
      "TypeScript",
      "Bun",
      "Express",
      "Drizzle",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Electron",
      "Terraform",
      "AWS",
      "Docker",
      "Prometheus",
      "Grafana",
      "Loki",
      "k6",
    ],
    link: "https://rbuexam.in",
    github: "https://github.com/MasterBhuvnesh/WCL",
  },

  {
    title: "Skarm - Multi-Tenant Issue Tracker",
    featured: true,
    icon: "Skarm",
    period: "2026",
    tags: ["Full-Stack", "AI"],
    description:
      "A Linear-style issue tracker for modern teams: real-time Kanban, cycles with burndown, two-way GitHub sync, and an org-aware AI agent, all scoped per organisation.",
    highlights: [
      "Real-time drag-and-drop Kanban using fractional sort ordering, sub-issues with typed relations (blocks, blocked by, related, duplicate of), team-scoped issue keys, templates, recurring issues on a cron cadence, and a Cmd+K command palette.",
      "Built for scale: cursor-paginated queries and CSS content-visibility virtualization targeting 10k-issue organisations, plus full-text search with match highlighting.",
      "Cross-team projects and auto-numbered cycles with burndown, velocity, and scope-change tracking reconstructed from the activity log, plus a React Flow dependency graph with draw-a-link editing and persisted layouts.",
      "Per-org GitHub App: repo picker, create-on-GitHub, two-way mirror of edits, status and comments with bot-echo filtering, and PR linking through issue keys, all over HMAC-verified webhooks. Figma OAuth adds live thumbnails, comment posting, and a Dev Mode resource.",
      "Org-aware AI agent with tool calling, one-line-to-full-spec drafting, duplicate detection over 4096-dim NV-Embed vector embeddings, and AI triage, rate-limited to 50 messages per user per day.",
      "Multi-tenancy through Clerk organisations with RLS-style orgQuery and orgMutation wrappers enforcing scoping on every server function, Svix-verified webhooks as the only writer of billing state, and three pricing tiers with free-tier limits enforced server-side.",
      "AWS SES email digests delivered per member in their local timezone on a daily, weekly, or custom-weekday schedule.",
    ],
    stack: [
      "Next.js 16",
      "Convex",
      "Clerk",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel AI SDK",
      "React Flow",
      "AWS SES",
      "Svix",
    ],
    link: "https://skarm.vercel.app/",
    github: "https://github.com/MasterBhuvnesh/skarm",
  },

  {
    title: "Studzee - AI-Powered SaaS Ecosystem",
    featured: true,
    icon: "Studzee",
    period: "Oct 2025 - Present",
    tags: ["Full-Stack", "Mobile", "AI"],
    description:
      "A four-platform ed-tech ecosystem for tech students covering ML, Deep Learning, System Design, and DevOps, with structured modules, smart summaries, and auto-generated quizzes synced across every client.",
    highlights: [
      "Four platforms behind one centralized backend: a web app, a React Native mobile app published to the Play Store, an Electron desktop admin console, and a containerized Node.js API.",
      "Deployed on AWS EC2 and S3 with Dockerized services and Redis caching on the read-heavy paths.",
      "CI/CD automation cut deployment and operational overhead by 40%.",
      "JWT and RBAC authentication enforced consistently across all clients.",
      "LangChain agents drive content automation across the platform.",
    ],
    stack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "LangChain",
    ],
    link: "https://studzee.in/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.bhuvii.studzee",
    github: "https://github.com/MasterBhuvnesh/studzee",
  },

  {
    title: "OverDrive - DevOps Automation Platform",
    icon: "OverDrive",
    period: "Mar 2026 - Present",
    tags: ["DevOps & Cloud"],
    description:
      "A zero-config deployment platform that reads a GitHub repository, works out how to ship it, and fixes its own failed deploys.",
    highlights: [
      "Detects the application stack (Node.js, Flask, Next.js) straight from the repository and generates an optimized Dockerfile for it.",
      "Auto-configures GitHub Actions workflows per project, so a repo goes from clone to deployed pipeline without hand-written CI.",
      "Self-healing debugging: diagnoses a failed deployment and opens a fix pull request automatically.",
    ],
    stack: ["TypeScript", "Docker", "GitHub Actions", "Next.js"],
    link: "https://overdrive-saas.vercel.app/",
    github: "https://github.com/MasterBhuvnesh/OverDrive",
  },

  {
    title: "K8s Microservices E-Commerce",
    icon: "k8s Ecom",
    period: "Feb 2026",
    tags: ["DevOps & Cloud"],
    description:
      "A small e-commerce application built specifically to practice Kubernetes deployment patterns end to end.",
    highlights: [
      "Microservice split with independent deployments, services, and ingress routing.",
      "ConfigMaps, secrets, and resource limits applied per service rather than baked into images.",
      "Used as the hands-on ground for rolling updates and cluster debugging workflows.",
    ],
    stack: ["JavaScript", "Node.js", "Docker", "Kubernetes"],
    github: "https://github.com/MasterBhuvnesh/k8s-microservices-ecom",
  },

  {
    title: "Morph57 - AI-Powered LaTeX CV Builder",
    icon: "Morph57",
    period: "Apr 2026 - Present",
    tags: ["AI", "Full-Stack"],
    description:
      "Paste a job description, get an ATS-optimized LaTeX resume back. No formatting, no guesswork.",
    highlights: [
      "Job-description-to-resume pipeline with structured content generation rather than free-form text.",
      "Section prioritization and role-specific customization, so the same history reads differently per target role.",
      "Live LaTeX preview and editing, with template selection before export.",
    ],
    stack: ["TypeScript", "Next.js", "LaTeX", "LLM APIs"],
    link: "https://morph57.vercel.app",
    github: "https://github.com/MasterBhuvnesh/MORPH57",
  },

  {
    title: "Atelier Health - HMS Platform",
    icon: "Hospital MS",
    period: "Aug 2026",
    tags: ["Full-Stack", "AI"],
    description:
      "An AI-augmented hospital management platform, with a single-process demo build that collapses eight microservices into one Fastify app for local runs.",
    highlights: [
      "Eight microservices covering the hospital workflow, mirrored by a single-process Fastify demo so the whole platform runs from one command.",
      "pgvector-backed AI memory for retrieval across patient and operational context.",
      "Integrations across Twilio, SMTP, S3, and NVIDIA inference endpoints.",
      "Dockerized deployment with automated workflows over a full-stack TypeScript architecture.",
    ],
    stack: [
      "TypeScript",
      "Fastify",
      "pgvector",
      "PostgreSQL",
      "Docker",
      "Twilio",
      "AWS S3",
    ],
    github: "https://github.com/MasterBhuvnesh/hospital.ms.ai",
  },

  {
    title: "Schedula - Event Management & Ticketing",
    icon: "Schedula",
    period: "May 2025 - Jun 2025",
    tags: ["Mobile", "Full-Stack"],
    description:
      "An event app that takes a user from discovery to a scanned QR ticket at the door, with a role-based check-in flow for organisers.",
    highlights: [
      "JWT-protected QR ticketing with an in-app scanner and role-based check-in.",
      "Clerk Google OAuth for sign-in, with Supabase behind the data layer.",
      "CI/CD through GitHub Actions and EAS for builds and releases.",
      "Node.js backend on Render with health-check crons keeping the service warm and observable.",
    ],
    stack: ["Expo", "React Native", "Supabase", "Node.js", "Clerk", "EAS"],
    github: "https://github.com/MasterBhuvnesh/Schedula-Application",
  },

  {
    title: "Guvi - Smart Irrigation System",
    icon: "Guvi",
    period: "Jun 2026",
    tags: ["Mobile"],
    description:
      "An autonomous ESP32-C3 irrigation system that reads its own soil and waters when the plant needs it, with a mobile app on top.",
    highlights: [
      "ESP32-C3 monitors soil moisture, temperature, and humidity every six hours and auto-waters when thresholds are crossed.",
      "Supabase handles database, auth, storage, and edge functions for the whole system.",
      "Expo mobile app and dashboard with multi-user plant photo tracking, daily sensor logs, and growth monitoring.",
    ],
    stack: ["ESP32-C3", "Supabase", "PLpgSQL", "Expo", "React Native"],
    github: "https://github.com/MasterBhuvnesh/guvi",
  },

  {
    title: "Kissan Vikas - Farmer Connection App",
    icon: "Kissan Vikas",
    period: "Apr 2025",
    tags: ["Mobile", "AI"],
    description:
      "A dual-language app bridging rural health awareness and peer-to-peer agricultural knowledge sharing, built out of fieldwork at Anandwan.",
    highlights: [
      "Dual-purpose build: leprosy health education alongside farmer-to-farmer knowledge exchange.",
      "Gemini API integration for real-time, verified answers in both supported languages.",
      "Shipped as an Expo web build so it reaches users without an install step.",
    ],
    stack: ["Expo", "React Native", "TypeScript", "Gemini API"],
    link: "https://kisanvikas.expo.app/",
    github: "https://github.com/MasterBhuvnesh/Kisan-Vikas",
  },
];

export function ProjectsSection() {
  const [category, setCategory] = useState("Featured");

  const byCategory = (c: string) =>
    c === "All"
      ? projects
      : c === "Featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.tags.includes(c));

  const visible = byCategory(category);

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          PROJECT
        </span>
      </div>

      <Tabs value={category} onValueChange={setCategory} className="mb-6">
        <TabsList className="h-auto flex-wrap justify-start gap-1 bg-gray-100">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c} className="text-xs sm:text-sm">
              {c}
              <span className="ml-1.5 text-[10px] text-gray-400">
                {byCategory(c).length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {visible.map((project) => (
          <Dialog key={project.title}>
            <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col h-full">
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="flex-1 flex flex-col cursor-pointer text-left w-full"
                >
                  <div className="h-56 w-full bg-white p-3">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
                        <span className="text-gray-600 text-4xl text-center px-4">
                          {project.icon}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-1 flex flex-col w-full">
                    <h3 className="text-base text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {project.period}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] text-gray-500 border border-gray-200 rounded px-1.5 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="text-[11px] text-gray-400 px-1">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <div className="flex flex-wrap gap-2 text-base px-4 py-3 bg-white mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a>
                )}
                {project.playstore && (
                  <a
                    href={project.playstore}
                    className="text-blue-600 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Store
                  </a>
                )}
                <DialogTrigger asChild>
                  <button className="text-gray-700 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white">
                    Details
                  </button>
                </DialogTrigger>
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-100 text-sm flex items-center gap-1 border px-3 py-1 rounded-md bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg pr-6">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-xs">
                  {project.period} &middot; {project.tags.join(" · ")}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                  What it does
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 text-gray-400">–</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 text-sm border px-3 py-1 rounded-md bg-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a>
                )}
                {project.playstore && (
                  <a
                    href={project.playstore}
                    className="text-blue-600 text-sm border px-3 py-1 rounded-md bg-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Store
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-100 text-sm border px-3 py-1 rounded-md bg-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
