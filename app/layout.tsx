import "./globals.css";
import { fontStyles } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";

export { metadata };

// Same Person @id as bhuvneshverma.dev so search engines treat both sites as one person.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://resume.bhuvneshverma.dev/#profile",
  url: "https://resume.bhuvneshverma.dev/",
  name: "Bhuvnesh Verma | Resume",
  mainEntity: {
    "@type": "Person",
    "@id": "https://bhuvneshverma.dev/#bhuvneshverma",
    name: "Bhuvnesh Verma",
    url: "https://bhuvneshverma.dev/",
    jobTitle: "Product Engineer, Cloud-Native Builder, AI Systems Creator",
    image: "https://bhuvneshverma.dev/bhuvii-512.jpg",
    address: { "@type": "PostalAddress", addressLocality: "Nagpur", addressCountry: "IN" },
    sameAs: [
      "https://github.com/MasterBhuvnesh",
      "https://www.linkedin.com/in/bhuvneshverma/",
      "https://medium.com/@bhuvneshverma",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <style>{fontStyles}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
