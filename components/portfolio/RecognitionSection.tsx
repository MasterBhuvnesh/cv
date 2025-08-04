// components/portfolio/RecognitionSection.tsx
export function RecognitionSection() {
  const recognition = [
    { title: "Best Web Designer", organization: "Awwwards", year: "2023" },
    {
      title: "Best animations awards",
      organization: "Framer Awards",
      year: "2020",
    },
    {
      title: "Top visual designer of the year",
      organization: "Awwwards",
      year: "2020",
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">RECOGNITION</h2>
      <div className="space-y-3">
        {recognition.map((award, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-white rounded-lg border hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-in-out cursor-pointer"
          >
            <div>
              <h3 className="font-semibold text-gray-900">{award.title}</h3>
              <p className="text-gray-600 text-sm">{award.organization}</p>
            </div>
            <span className="text-gray-500 text-sm">{award.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
