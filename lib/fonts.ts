import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export { GeistSans, GeistMono, DancingScript };

export const fontVariables = {
  sans: GeistSans.variable,
  mono: GeistMono.variable,
  script: DancingScript.variable,
};

export const fontStyles = `
html {
    font-family: ${GeistSans.style.fontFamily};
    --font-sans: ${GeistSans.variable};
    --font-mono: ${GeistMono.variable};
    --font-dancing-script: ${DancingScript.variable};
}
`;
