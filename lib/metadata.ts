import type { Metadata } from "next";

const title =
  "Bhuvnesh Verma | Resume";
const description =
  "Resume of Bhuvnesh Verma, product engineer, cloud-native builder and AI systems creator in Nagpur, India: experience, projects, skills and a downloadable CV.";
const image = {
  url: "https://bhuvneshverma.dev/og-v2.png",
  width: 1200,
  height: 630,
  alt: "Bhuvnesh Verma · Product Engineer, Cloud-Native Builder, AI Systems Creator",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://resume.bhuvneshverma.dev"),
  alternates: { canonical: "/" },
  title,
  icons: {
    icon: "/icon.jpeg",
  },
  description,
  keywords: [
    "Bhuvnesh Verma",
    "full-stack developer",
    "software engineer",
    "system architect",
    "SaaS developer",
    "Node.js",
    "React",
    "Next.js",
    "Expo",
    "React Native",
    "TypeScript",
    "AWS",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "cloud-native",
    "CI/CD",
    "infrastructure as code",
    "RAG pipelines",
    "AI agents",
    "LangChain",
    "GDG RBU",
    "Ramdeobaba University",
    "AI and ML",
    "Studzee",
    "Skarm",
    "WCL Examination Platform",
    "portfolio",
  ],
  authors: [{ name: "Bhuvnesh Verma" }],
  creator: "Bhuvnesh Verma",
  openGraph: {
    title: title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Bhuvnesh Verma",
    url: "/",
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    images: [image],
    title: title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
};
