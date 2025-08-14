export function RecognitionSection() {
  const recognition = [
    {
      title: "Google Gemini Ambassador",
      organization: "Google - Gemini",
      year: "2025",
    },
    { title: "Android Developer", organization: "GDG Campus", year: "2023" },
    {
      title: "Best Architecture Design",
      organization: "ByteByteGo",
      year: "2024",
    },
    {
      title: "Karate Certified",
      organization: "Gitoku Kai India",
      year: "2022",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          RECOGNITION
        </span>
      </div>
      <div className="space-y-4">
        {recognition.map((item, idx) => (
          <div
            key={item.title + item.year}
            className="bg-white rounded-xl shadow-sm overflow-hidden  hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="px-3 py-1">
              <div className="flex items-center justify-between">
                <div className="pl-2 pb-1">
                  <h3 className="text-gray-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.organization}
                  </p>
                </div>
                <span className="text-[12px] text-gray-500">{item.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
