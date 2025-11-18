import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import SeoSchema from "@/components/seo-schema"
import DonationPopup from "@/components/donation-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Simmon Chang Chess Club | CFC-Rated Tournaments for Cancer Research",
    template: "%s | Simmon Chang Chess Club",
  },
  description:
    "Simmon Chang Chess Club conducts CFC-rated chess tournaments to raise funds for cancer research. Join our community of chess players supporting the Pediatric Cancer Research Foundation (PCRF). Named after Simmon Chang, who passed away from osteosarcoma.",
  keywords: [
    "chess club",
    "CFC rated tournaments",
    "chess tournaments",
    "cancer research fundraiser",
    "pediatric cancer research",
    "PCRF",
    "Simmon Chang",
    "chess community",
    "Dr. Interested",
    "chess events",
  ],
  authors: [{ name: "Simmon Chang Chess Club" }],
  creator: "Simmon Chang Chess Club",
  publisher: "Simmon Chang Chess Club",
  category: "Games & Recreation",
  classification: "Chess Tournaments",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chess.drinterested.org",
    title: "Simmon Chang Chess Club - CFC-Rated Tournaments",
    description:
      "Join our chess tournaments and support cancer research through the Pediatric Cancer Research Foundation.",
    siteName: "Simmon Chang Chess Club",
    images: [
      {
        url: "https://chess.drinterested.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simmon Chang Chess Club",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simmon Chang Chess Club - Support Cancer Research",
    description: "Play chess, support cancer research. Join our CFC-rated tournaments.",
    images: ["https://chess.drinterested.org/og-image.png"],
  },
  alternates: {
    canonical: "https://chess.drinterested.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
  metadataBase: new URL("https://chess.drinterested.org"),
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#405862" },
    { media: "(prefers-color-scheme: dark)", color: "#4ecdc4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Simmon Chang Chess Club" />
        <meta name="copyright" content="Simmon Chang Chess Club 2025" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
            <DonationPopup />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
