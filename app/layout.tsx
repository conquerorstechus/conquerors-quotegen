import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conquerors Digital | Expert Social Media Management from $99/mo",
  description:
    "Premium social media management, content creation, and digital marketing services. Trusted By Growing Brands & Businesses. Start from only $99/month.",
  generator: "v0.app",
  icons: {
    // Use the custom favicon for every page tab.
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
