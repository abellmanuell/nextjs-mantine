// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";
import { Poppins, Lexend } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose the weights you need
  variable: "--font-poppins",
});

const lexend = Lexend({
  subsets: ["latin"],
  // weight: ["400", "600", "700"],
  variable: "--font-lexend",
});

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
  title: "BluuPlay",
  description: "Everything You Need To Sell More.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${poppins.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider withGlobalClasses>{children}</MantineProvider>
      </body>
    </html>
  );
}
