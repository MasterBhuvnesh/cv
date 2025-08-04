export function SkillsSection() {
  const skills = [
    "App Development",
    "Problem-Solving",
    "System Design",
    "Backend",
    "Web Development",
    "DevOps",
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base  inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          SKILLS
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" text-wrap bg-white text-gray-600 px-4 text-base py-1 rounded-md text-center shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
