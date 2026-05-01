import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Studzee — Structured Learning for Developers & Students",
      icon: "Studzee",
      period: "Oct 2024 - Present",
      description:
        "A cross-platform ed-tech app for tech students covering ML, Deep Learning, System Design, and DevOps — with structured modules, smart summaries, and auto-generated quizzes synced across phone, browser, and desktop. Built on a TypeScript microservice backend with Docker, Kubernetes, and AWS.",
      image: "",
      link: "https://studzee.in/",
      playstore: "https://play.google.com/store/apps/details?id=com.bhuvii.studzee",
      github: "https://github.com/MasterBhuvnesh/Studzee",
      info: "https://github.com/MasterBhuvnesh/Studzee#readme",
    },
    {
      title: "Schedula – Event Management & Ticketing App",
      icon: "Schedula",
      period: "May 2025 - June 2025",
      description:
        "A full-stack event management app built with Expo, Supabase, and a custom Node.js backend—featuring real-time event discovery, JWT-protected QR code ticketing, Clerk-based Google OAuth, and a CI/CD pipeline with GitHub Actions and EAS.",
      image: "/gamma.jpg?height=120&width=300",
      link: "",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/Schedula-Application",
      info: "https://github.com/MasterBhuvnesh/Schedula-Application#readme",
    },
    {
      title: "Morph57 – AI-Powered LaTeX CV Builder",
      icon: "Morph57",
      period: "April 2026 - Present",
      description:
        "An AI-driven resume generation platform that converts job descriptions into ATS-optimized LaTeX resumes with structured content generation, section prioritization, role-specific customization, and real-time preview and editing.",
      image: "",
      link: "https://morph57.vercel.app/",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/Morph57",
      info: "https://github.com/MasterBhuvnesh/Morph57#readme",
    },
    {
      title: "OverDrive – DevOps Automation & Deployment Platform",
      icon: "OverDrive",
      period: "March 2026 - Present",
      description:
        "A zero-config deployment platform that auto-detects application stacks from GitHub repos, generates optimized Dockerfiles, configures CI/CD pipelines dynamically, and features self-healing debugging with automated PR fixes.",
      image: "",
      link: "https://overdrive-saas.vercel.app/",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/OverDrive",
      info: "https://github.com/MasterBhuvnesh/OverDrive#readme",
    },
    {
      title: "Node – Multi-User Group Collaboration System",
      icon: "Node",
      period: "April 2026 - Present",
      description:
        "A backend-driven collaboration platform with multi-role group management, fine-grained RBAC (Owner, Leader, Member), comprehensive activity logging, and a scalable Node.js + SQL architecture focused on data integrity.",
      image: "",
      link: "",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/Node",
      info: "https://github.com/MasterBhuvnesh/Node#readme",
    },
    {
      title: "GDG RBU – Community Website",
      icon: "GDG RBU",
      period: "",
      description:
        "The official website for GDG on Campus RBU — a community hub featuring event management, team profiles, gallery, portfolio builder, and membership registration. Built with Next.js and designed to empower students with tech skills and resources.",
      image: "",
      link: "https://gdgrbu.tech",
      playstore: "",
      github: "",
      info: "",
    },
    {
      title: "Kissan Vikas – Farmer Connection App",
      icon: "Kissan Vikas",
      period: "",
      description:
        "A dual-language app bridging rural health awareness and agricultural knowledge sharing, inspired by fieldwork at Anandwan. Built with Expo and Gemini API for real-time, verified resources.",
      image: "/theta.jpg?height=120&width=300",
      link: "https://kisanvikas.expo.app",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/Kisan-Vikas",
      info: "https://github.com/MasterBhuvnesh/Kisan-Vikas#readme",
    },
    {
      title: "Hospital MS AI – AI-Augmented Hospital Management System",
      icon: "Hospital MS",
      period: "",
      description:
        "An AI-augmented hospital management system built with TypeScript, featuring Dockerized deployment, automated workflows, and a full-stack architecture for streamlined hospital operations.",
      image: "",
      link: "",
      playstore: "",
      github: "https://github.com/MasterBhuvnesh/hospital.ms.ai",
      info: "https://github.com/MasterBhuvnesh/hospital.ms.ai#readme",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          PROJECT
        </span>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full"
          >
            <div className="h-56 bg-white p-3">
              {project.image && !project.image.includes("placeholder") ? (
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

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base text-gray-900 mb-1">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{project.period}</p>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-base px-4 py-3 bg-white mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Preview"
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
                  aria-label="Play Store"
                >
                  Play Store
                </a>
              )}
              {project.info && (
                <a
                  href={project.info}
                  className="text-gray-700 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white"
                >
                  Info
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="text-gray-100 text-sm flex items-center gap-1 border px-3 py-1 rounded-md bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
