import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "⚡ Manikant Kumar | Full-Stack Developer & Real-Time Architect",
  description:
    "Portfolio of Manikant Kumar - Full-Stack Developer specializing in React.js, Node.js, Java Spring Boot, Python FastAPI, MySQL, and Socket.IO real-time high-concurrency systems.",
  keywords: [
    "Manikant Kumar",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Java Spring Boot",
    "Python FastAPI",
    "Socket.IO",
    "Next.js Portfolio",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Manikant Kumar" }],
  creator: "Manikant Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfoliomanikant.netlify.app/",
    title: "⚡ Manikant Kumar | Full-Stack Developer & Real-Time Architect",
    description:
      "Crafting high-concurrency digital platforms, transactional billing engines, and real-time Socket.IO architectures.",
    siteName: "Manikant Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "⚡ Manikant Kumar | High-Voltage Portfolio",
    description:
      "Crafting high-concurrency digital platforms and real-time Socket.IO architectures.",
    creator: "@manikantkumar",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="bg-[#070b14] text-[#f3f4f6] min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
