// components/portfolio/RecommendationsSection.tsx
import Image from "next/image";

export function RecommendationSection() {
  const recommendations = [
    {
      name: "Maunil Parikh",
      role: "Co-founder StackWalls",
      date: "February 2023",
      text: "Bhuvnesh's ability to combine creativity with strategic thinking has transformed the way our team approaches challenges. He is quite in his element.",
      avatar: "/alpha.jpg?height=40&width=40",
    },
    {
      name: "Ranjit Bhatta",
      role: "CEO Programiz",
      date: "March 2021",
      text: "Bhuvnesh's work ethic and attention to detail are unmatched. His contributions have significantly improved our product's user experience.",
      avatar: "/beta.jpg?height=40&width=40",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          RECOMMENDATION
        </span>
      </div>
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center gap-4 mb-2">
              <Image
                src={rec.avatar || "/placeholder.svg"}
                alt={rec.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-gray-900">{rec.name}</h3>
                <p className="text-gray-600 text-sm">{rec.role}</p>
              </div>
              <span className="text-gray-500 text-sm">{rec.date}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{rec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
