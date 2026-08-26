type Resource = {
  title: string;
  period: string;
  description: string;
  points: string[];
  stack: string[];
  github: string;
};

const resources: Resource[] = [
  {
    title: "Notebooks - CI-Built Technical Books",
    period: "Aug 2026",
    description:
      "Technical books typeset as PDFs from source: LaTeX plus mermaid diagrams under one shared style, built and committed by CI.",
    points: [
      "One shared LaTeX style applied across every book so output stays consistent.",
      "Mermaid diagrams rendered as part of the build rather than pasted in as images.",
      "GitHub Actions builds the PDFs and commits them back, so the repo is the publishing pipeline.",
    ],
    stack: ["Python", "LaTeX", "Mermaid", "GitHub Actions"],
    github: "https://github.com/MasterBhuvnesh/notebooks",
  },
  {
    title: "Agentic Design Patterns",
    period: "Aug 2026",
    description:
      "Reference documentation for 21 agentic AI design patterns, with diagrams and runnable examples.",
    points: [
      "Twenty-one patterns documented with mermaid diagrams, ASCII art, and a written discussion of when each applies.",
      "Each pattern paired with a LangChain code example rather than pseudocode.",
    ],
    stack: ["Python", "LangChain", "Mermaid"],
    github: "https://github.com/MasterBhuvnesh/agentic-design-patterns",
  },
  {
    title: "Node - Kubernetes on AWS EKS",
    period: "Apr 2026 - Present",
    description:
      "A real backend taken end to end onto AWS EKS: Terraform-provisioned cluster, Prometheus and Grafana observability, and CI/CD, documented as a working reference.",
    points: [
      "Terraform modules provisioning an EKS cluster and its supporting AWS resources from scratch.",
      "Prometheus and Grafana wired into the cluster for metrics and dashboards.",
      "GitHub Actions pipeline building and rolling out the workload to the cluster.",
      "The application itself is a multi-user group collaboration system with fine-grained RBAC (Owner, Leader, Member) and full activity logging.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],
    github: "https://github.com/MasterBhuvnesh/Node",
  },
];

export function ResourcesSection() {
  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          RESOURCES
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Documentation and reference builds I maintain in the open, written to be
        read rather than shipped.
      </p>
      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-base text-gray-900">{resource.title}</h3>
              <span className="text-[12px] text-gray-500 shrink-0">
                {resource.period}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-3">{resource.description}</p>

            <ul className="space-y-2 mb-3">
              {resource.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 leading-relaxed pl-4 relative"
                >
                  <span className="absolute left-0 text-gray-400">–</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {resource.stack.map((t) => (
                <span
                  key={t}
                  className="text-[11px] text-gray-500 border border-gray-200 rounded px-1.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={resource.github}
              className="inline-flex text-gray-100 text-sm border px-3 py-1 rounded-md bg-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
