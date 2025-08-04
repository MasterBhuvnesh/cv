// components/portfolio/RecommendationsSection.tsx
import Image from "next/image";

export function RecommendationSection() {
  const recommendations = [
    {
      name: "Jonathan Carter",
      role: "Co-founder CTO",
      date: "February 2023",
      text: "Alex's ability to combine creativity with strategic thinking has transformed the way our team approaches challenges. He is quite in his element.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Johnson",
      role: "Head of Product, NextCorp",
      date: "February 2023",
      text: "Alex's leadership and vision have set a new standard for excellence, making a lasting impact on every project they lead. Highly recommend to work with him.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Samantha Lee",
      role: "COO, Innovate",
      date: "February 2023",
      text: "Alex consistently brings a fresh perspective to every project, fostering a collaborative environment that elevates the entire team.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        RECOMMENDATIONS
      </h2>
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out"
          >
            <div className="flex items-start gap-4">
              <Image
                src={rec.avatar || "/placeholder.svg"}
                alt={rec.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                    <p className="text-gray-600 text-sm">{rec.role}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{rec.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {rec.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
