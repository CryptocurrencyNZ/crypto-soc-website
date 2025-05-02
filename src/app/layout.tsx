import type { Metadata } from "next";
import { Alegreya_SC, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const agreya = Alegreya_SC({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "University of Canterbury Crypto Society DAO",
  description:
    "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain DAO Society  - Advancing Adoption, Knowledge and Community at UC.",
  robots:
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  metadataBase: new URL("https://uccryptosoc.org.nz/"),
  alternates: {
    canonical: "https://uccryptosoc.org.nz/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "University of Canterbury Crypto Society DAO",
    description:
      "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain Society - Advancing Adoption, Knowledge and Community at UC.",
    url: "https://uccryptosoc.org.nz/",
    siteName: "UC Crypto Society",
    images: [
      {
        url: "/images/Crypto-soc-Logo.png",
        secureUrl: "/images/Crypto-soc-Logo.png",
        width: 1200,
        height: 630,
        alt: "UC Crypto Society Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UC Crypto Society - University of Canterbury Bitcoin, Crypto & Blockchain Society",
    description:
      "UC Crypto Society | University of Canterbury's Bitcoin, Crypto & Blockchain Society - Advancing Adoption, Knowledge and Community at UC.",
    creator: "@CNZ_DAO",
    images: ["/images/Crypto-soc-Logo.png"],
  },
  authors: [{ name: "UC Crypto Society" }],
  other: {
    "article:published_time": "2024-01-01T00:00:00+13:00",
    "article:modified_time": "2024-03-21T00:00:00+13:00",
    "twitter:label1": "Organization",
    "twitter:data1": "UC Crypto Society",
    "twitter:label2": "Location",
    "twitter:data2": "University of Canterbury, New Zealand",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${agreya.variable} ${inter.variable} antialiased bg-dark`}
      >
        <div className="relative w-full min-h-screen bg-dark text-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
