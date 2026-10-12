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
  metadataBase: new URL("https://manikantportfolio-drab.vercel.app"),
  title: "Manikant Kumar | Full Stack Developer | React, Next.js, Node.js & Java Spring Boot",
  description:
    "Portfolio of Manikant Kumar - Full Stack Engineer at Appspine Technologies. Expert in React.js, Next.js 16, TypeScript, Node.js, Express.js, Java Spring Boot, Python FastAPI, PostgreSQL, and Socket.IO real-time high-concurrency systems.",
  keywords: [
    "Manikant Kumar",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Appspine Technologies",
    "React.js Developer",
    "Next.js Developer",
    "Next.js 16 App Router",
    "TypeScript Engineer",
    "Node.js Backend Developer",
    "Express.js REST APIs",
    "Java Spring Boot Developer",
    "Python FastAPI Developer",
    "PostgreSQL Developer",
    "MySQL Database Optimization",
    "Socket.IO Real-Time Systems",
    "Redis In-Memory Caching",
    "Razorpay Payment Gateway",
    "Microservices Architecture",
    "Full Stack Developer Noida",
    "Software Engineer India",
    "Web Developer Portfolio",
    "Scalable Web Applications",
    "High Concurrency Systems",
    "ACID Transaction Engine",
  ],
  authors: [{ name: "Manikant Kumar", url: "https://manikantportfolio-drab.vercel.app/" }],
  creator: "Manikant Kumar",
  publisher: "Manikant Kumar",
  alternates: {
    canonical: "https://manikantportfolio-drab.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://manikantportfolio-drab.vercel.app/",
    title: "Manikant Kumar | Full Stack Engineer & Real-Time System Architect",
    description:
      "Full Stack Engineer at Appspine Technologies. Crafting high-concurrency web platforms, transactional billing engines, and real-time Socket.IO architectures.",
    siteName: "Manikant Kumar Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Manikant Kumar - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikant Kumar | Full Stack Engineer & Real-Time Architect",
    description:
      "Full Stack Engineer at Appspine Technologies. Building high-concurrency web systems with React, Next.js, Node.js, Spring Boot & Socket.IO.",
    creator: "@VEDANTraj9",
    images: ["/profile.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://manikantportfolio-drab.vercel.app/#person",
      name: "Manikant Kumar",
      jobTitle: "Full Stack Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Appspine Technologies",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Technocrats Institute of Technology, Bhopal",
      },
      url: "https://manikantportfolio-drab.vercel.app/",
      image: "https://manikantportfolio-drab.vercel.app/profile.png",
      sameAs: [
        "https://github.com/VEDANTraj9",
        "https://www.linkedin.com/in/manikant-kumar",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida sector-4",
        addressRegion: "Uttar Pradesh",
        addressCountry: "India",
      },
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Java Spring Boot",
        "Python FastAPI",
        "PostgreSQL",
        "MySQL",
        "Socket.IO",
        "Redis",
        "RESTful APIs",
        "Microservices Architecture",
        "Full-Stack Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://manikantportfolio-drab.vercel.app/#website",
      name: "Manikant Kumar - Portfolio",
      url: "https://manikantportfolio-drab.vercel.app/",
      description:
        "Full Stack Engineer portfolio of Manikant Kumar showcasing scalable web apps, real-time architectures, and production systems.",
      publisher: {
        "@id": "https://manikantportfolio-drab.vercel.app/#person",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070b14] text-[#f3f4f6] min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
