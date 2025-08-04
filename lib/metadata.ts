import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio CV",
  description: "A portfolio CV ",
  keywords: ["portfolio", "cv", "resume", "developer", "professional"],
  authors: [{ name: "Bhuvnesh Verma" }],
  creator: "Bhuvnesh Verma",
  openGraph: {
    title: "Portfolio CV",
    description: "A portfolio CV ",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio CV",
    description: "A portfolio CV ",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
