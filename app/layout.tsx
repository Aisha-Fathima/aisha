import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aisha — building things & narrating the journey",
  description: "Code, photography, writing, and side quests.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Aisha — building things & narrating the journey",
    description: "Code, photography, writing, and side quests.",
    url: "https://aisha.vercel.app", 
    siteName: "Aisha",
    images: [
      {
        url: "/thumbnail.png", 
        width: 1200,
        height: 627,
        alt: "Aisha personal website preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aisha — building things & narrating the journey",
    description: "Code, photography, writing, and side quests.",
    images: ["/thumbnail.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
