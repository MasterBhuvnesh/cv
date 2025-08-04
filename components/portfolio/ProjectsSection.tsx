import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ProjectsSection() {
  const projects = [
    {
      title: "Schedula - Event Organizing & Managing App",
      icon: "Schedula",
      description:
        "A modern event management app with real-time event discovery, QR-based ticketing, one-tap registration, and admin check-in—built with a custom Node.js backend, Expo, and Supabase.",
      image: "/gamma.jpg?height=120&width=300",
      link: "",
      github: "https://github.com/MasterBhuvnesh/Schedula-Application",
      info: "https://github.com/MasterBhuvnesh/Schedula-Application#readme",
    },
    {
      title: "Kissan Vikas –  Farmer Connection App",
      icon: "Kissan Vikas",
      description:
        "A dual-language app that bridges rural health awareness (leprosy) and agricultural knowledge sharing, inspired by fieldwork at Anandwan. Built using Expo and Gemini for real-time, verified resources.",
      image: "/theta.jpg?height=120&width=300",
      link: "https://kisanvikas.expo.app",
      github: "https://github.com/MasterBhuvnesh/Kisan-Vikas",
      info: "https://github.com/MasterBhuvnesh/Kisan-Vikas#readme",
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
            {/* Image Section - Made smaller and more rectangular */}
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
                  <span className="text-gray-600 text-4xl  text-center px-4">
                    {project.icon}
                  </span>
                </div>
              )}
            </div>

            {/* Description Section */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-base text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
            </div>
            {/* Links Section */}
            <div className="flex gap-4 text-base px-4 py-3 bg-white mt-auto">
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
              <a
                href={project.info}
                className="text-gray-700 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors bg-white"
              >
                Info
              </a>
              <a
                href={project.github}
                className="text-gray-100 text-sm flex items-center gap-1 border px-3 py-1 rounded-md bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
