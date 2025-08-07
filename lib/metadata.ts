import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhuvnesh CV",
  icons: {
    icon: "/icon.jpeg",
  },
  description:
    "A portfolio CV of Bhuvnesh Verma, showcasing skills and projects.",
  keywords: ["portfolio", "cv", "resume", "developer", "professional"],
  authors: [{ name: "Bhuvnesh Verma" }],
  creator: "Bhuvnesh Verma",
  openGraph: {
    title: "Bhuvnesh Verma CV",
    description:
      "A portfolio CV of Bhuvnesh Verma, showcasing skills and projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhuvnesh Verma CV",
    description:
      "A portfolio CV of Bhuvnesh Verma, showcasing skills and projects.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
