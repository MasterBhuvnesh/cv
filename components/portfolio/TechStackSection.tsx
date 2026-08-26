"use client";
import { ShinyButton } from "../magicui/shiny-button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

export function TechStackSection() {
  const specialTechStack = [
    "TypeScript",
    "Next.js",
    "Expo",
    "Bun",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
  ];

  const techStack = {
    Languages: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "C" },
      { name: "C++" },
      { name: "Bash" },
      { name: "LaTeX" },
    ],
    "Frontend & Web": [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Redux" },
      { name: "Framer Motion" },
      { name: "React Flow" },
      { name: "shadcn/ui" },
    ],
    "Mobile & Desktop": [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Expo Router" },
      { name: "EAS Build" },
      { name: "Expo Notifications" },
      { name: "NativeWind" },
      { name: "Electron" },
      { name: "Play Store / App Store" },
    ],
    "Backend & APIs": [
      { name: "Node.js" },
      { name: "Bun" },
      { name: "Express.js" },
      { name: "Fastify" },
      { name: "Spring Boot 3" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "Microservices" },
      { name: "Cron / Scheduled Jobs" },
    ],
    "Databases & ORMs": [
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Convex" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Firebase" },
      { name: "Drizzle" },
      { name: "Prisma" },
      { name: "PgBouncer" },
      { name: "pgvector" },
    ],
    "Cloud & Infrastructure": [
      { name: "AWS EC2" },
      { name: "AWS RDS" },
      { name: "AWS ElastiCache" },
      { name: "AWS S3" },
      { name: "AWS Lambda" },
      { name: "AWS ALB + ACM" },
      { name: "AWS Route 53" },
      { name: "AWS SNS" },
      { name: "AWS SES" },
      { name: "AWS EventBridge" },
      { name: "Terraform" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS EKS" },
      { name: "Render" },
      { name: "Vercel" },
      { name: "Cloudflare" },
    ],
    "CI/CD & DevOps": [
      { name: "GitHub Actions" },
      { name: "CI/CD Pipeline Design" },
      { name: "Docker Hub + watchtower" },
      { name: "Multi-stage Builds" },
      { name: "Release Engineering" },
      { name: "Semantic Versioning" },
      { name: "Infrastructure as Code" },
      { name: "Git" },
      { name: "GitHub" },
    ],
    "Observability & Testing": [
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Loki" },
      { name: "Langfuse" },
      { name: "Sentry" },
      { name: "LogRocket" },
      { name: "k6 Load Testing" },
      { name: "Chaos Testing" },
      { name: "Vitest" },
    ],
    "Auth & Security": [
      { name: "Clerk" },
      { name: "OAuth 2.0" },
      { name: "JWT" },
      { name: "RBAC" },
      { name: "Supabase Auth" },
      { name: "Firebase Auth" },
      { name: "HMAC Webhook Verification" },
      { name: "Svix" },
      { name: "Rate Limiting" },
      { name: "Row-Level Scoping" },
    ],
    "AI & LLM": [
      { name: "LangChain" },
      { name: "RAG Pipelines" },
      { name: "AI Agents & Tool Calling" },
      { name: "Embeddings & Semantic Search" },
      { name: "Structured Outputs" },
      { name: "Prompt Engineering" },
      { name: "Unsloth Fine-Tuning" },
      { name: "OCR" },
      { name: "Vercel AI SDK" },
      { name: "OpenAI / Gemini / Anthropic" },
    ],
    "Architecture & Practices": [
      { name: "System Design" },
      { name: "Clean Architecture" },
      { name: "Multi-Tenancy" },
      { name: "Caching Strategy" },
      { name: "Idempotency" },
      { name: "Cursor Pagination" },
      { name: "Event-Driven Architecture" },
      { name: "Agile" },
      { name: "Code Reviews" },
    ],
  };

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          TECH STACK
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {specialTechStack.map((sTech, index) => (
          <div
            key={index}
            className="text-wrap bg-white text-gray-600 px-4 text-base py-1 rounded-md text-center shadow-sm"
          >
            {sTech}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Drawer>
          <DrawerTrigger asChild>
            <ShinyButton className="mb-4 px-4 py-2 text-sm">
              View All Technologies
            </ShinyButton>
          </DrawerTrigger>
          <DrawerContent className="max-h-[85vh]">
            <DrawerHeader className="text-center sm:text-left">
              <DrawerTitle className="text-xl font-semibold">
                Complete Tech Stack
              </DrawerTitle>
              <DrawerDescription>
                All technologies and tools I work with, organized by category
              </DrawerDescription>
            </DrawerHeader>

            <div className="px-4 pb-4 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div
                    key={category}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="text-gray-900 text-base font-medium mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-200 shadow-sm"
                        >
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center p-4 border-t border-gray-200">
              <DrawerClose asChild>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                  <X className="w-4 h-4" />
                  Close
                </button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
