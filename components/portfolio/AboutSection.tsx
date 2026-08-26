export function AboutSection() {
  return (
    <section>
      <div className="mb-6">
        <span className="text-gray-900 text-base  inline-block border px-3 border-gray-300 rounded-lg mb-4 bg-gray-50 capitalize text-center">
          ABOUT
        </span>
      </div>
      <div className="space-y-4 text-gray-600 leading-relaxed text-base ">
        <p>
          Hi, I’m Bhuvnesh Verma, a Cloud-Focused Full-Stack and App Engineer
          from Nagpur, India, with 2+ years of hands-on experience building
          production-ready applications and cloud-native systems.
        </p>
        <p>
          I specialize in React Native, modern web stacks, backend systems, and
          DevOps-driven delivery. I’ve led an examination platform serving ~600
          candidates on AWS with the whole stack codified in Terraform, shipped
          React Native apps to the Play Store and App Store, and built RAG
          pipelines and AI agents into real products.
        </p>
        <p>
          I own problems end to end: designing APIs, implementing auth,
          automating CI/CD, and keeping production observable. I care about clean
          architecture, strong system design, and shipping fast without
          shortcuts.
        </p>
      </div>
    </section>
  );
}
