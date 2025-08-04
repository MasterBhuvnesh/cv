import "./globals.css";
import { fontStyles } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{fontStyles}</style>
      </head>
      {/*  CHANGE LATER */}
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
