import Image from "next/image";
import { ExternalLink, GithubIcon } from "lucide-react";
import { info } from "console";

export function ProjectsSection() {
  // const projects = [
  //   {
  //     title: "Slate",
  //     description:
  //       "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     github: "#",
  //     info: "#",
  //   },
  //   {
  //     title: "Anterafull",
  //     description:
  //       "A dynamic animation focused landing page highlighting creative storytelling and interactive elements.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     github: "#",
  //     info: "#",
  //   },
  //   {
  //     title: "Blurr",
  //     description:
  //       "A modern portfolio website with smooth animations and clean design aesthetics.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     github: "#",
  //     info: "#",
  //   },
  // ];
  const projects = [
    {
      title: "Schedula - Event Organizing & Managing App",
      description:
        "A modern event management app with real-time event discovery, QR-based ticketing, one-tap registration, and admin check-in—built with a custom Node.js backend, Expo, and Supabase.",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://bhuvneshverma.expo.app",
      github: "https://github.com/MasterBhuvnesh/Schedula-Application",
      info: "https://github.com/MasterBhuvnesh/Schedula-Application#readme",
    },
    {
      title: "Kissan Vikas –  Farmer Connection App",
      description:
        "A dual-language app that bridges rural health awareness (leprosy) and agricultural knowledge sharing, inspired by fieldwork at Anandwan. Built using Expo and Gemini for real-time, verified resources.",
      image: "/placeholder.svg?height=200&width=300",
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
            className="bg-white rounded-lg border overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="aspect-video bg-gray-100">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>
              <div className="flex gap-4 text-base ">
                <a
                  href={project.link}
                  className="text-blue-600 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Preview"
                >
                  Live Preview
                </a>
                <a
                  href={project.info}
                  className="text-gray-700 text-sm flex items-center gap-1 border px-3 py-1 rounded-md transition-colors"
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
          </div>
        ))}
      </div>
    </section>
  );
}
