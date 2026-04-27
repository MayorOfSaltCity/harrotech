import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harrington Technologies™ — Technology Built for Real-World Execution",
    template: "%s | Harrington Technologies™",
  },
  description:
    "Harrington Technologies™ designs software, digital systems, automation workflows, and practical training programmes that help people and businesses operate with more skill, speed, and control.",
  keywords: [
    "Harrington Technologies™",
    "software development",
    "business systems",
    "automation",
    "AI development",
    "digital operations",
    "TradeCraft Thuto™",
    "skills development",
    "South Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Harrington Technologies™",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
