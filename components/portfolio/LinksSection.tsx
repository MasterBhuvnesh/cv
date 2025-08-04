// components/portfolio/LinksSection.tsx
import { ExternalLink } from "lucide-react";

export function LinksSection() {
  const links = [
    { platform: "Book a call", url: "#" },
    { platform: "Dribbble", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">LINKS</h2>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out group"
          >
            <span className="text-gray-700">{link.platform}</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
