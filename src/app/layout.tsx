import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

import ThemeProvider from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Art0citus.dev",
  description: "Portfolio of Ritik Mishra",
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
      className={`${geistSans.variable} ${geistMono.variable} ${pixel.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script
          src="/oneko.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}