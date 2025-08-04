// components/portfolio/LinksSection.tsx
import { ExternalLink } from "lucide-react";

export function LinksSection() {
  const links = [
    {
      platform: "HackerRank",
      url: "https://www.hackerrank.com/profile/bhuvneshverma291",
    },
    { platform: "Codolio", url: "https://codolio.com/profile/Verma" },
    { platform: "GitHub", url: "https://github.com/MasterBhuvnesh" },
    { platform: "Medium", url: "https://medium.com/@bhuvneshverma" },
    { platform: "Instagram", url: "https://www.instagram.com/vermaji_2904/" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/bhuvneshverma/" },
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          LINKS
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center justify-between p-2 px-3 bg-white rounded-lg border hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-in-out group"
          >
            <span className="text-gray-700">{link.platform}</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
