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
    "Expo",
    "Next.js",
    "Bun",
    "Supabase",
    "Clerk",
    "TypeScript",
    "GitHub Actions",
    "Docker",
    "CI/CD",
  ];

  const techStack = {
    "Web Development": [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "TanStack Query" },
      { name: "Framer Motion" },
    ],
    "App Development": [
      { name: "React Native" },
      { name: "Expo" },
      { name: "EAS CLI" },
      { name: "NativeWind" },
      { name: "Zustand" },
      { name: "LogRocket" },
      { name: "Sentry" },
    ],
    Backend: [
      { name: "Node.js" },
      { name: "Bun" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "Redis" },
    ],
    Languages: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
    ],
    Databases: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Convex" },
    ],
    ORMs: [{ name: "Prisma" }, { name: "Drizzle" }],
    Authentication: [
      { name: "Clerk" },
      { name: "OAuth" },
      { name: "Firebase Auth" },
      { name: "Supabase Auth" },
      { name: "JWT" },
    ],
    "DevOps Tools": [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "Webpack" },
      { name: "GitHub Actions" },
      { name: "CI/CD Pipeline" },
      { name: "Cloudflare" },
    ],
    Utilities: [
      { name: "ESLint" },
      { name: "Sentry" },
      { name: "Ngrok" },
      { name: "Uploadcare" },
    ],
    Methodologies: [
      { name: "Agile" },
      { name: "Version Control" },
      { name: "Code Reviews" },
      { name: "Clean Architecture" },
      { name: "Test-Driven Development" },
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
                    <h3 className="text-gray-900 text-base font-medium mb-3 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
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
