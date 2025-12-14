import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zefanya Williams",
  description: "Portfolio - Next.js",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/bento-grid.css" />
        <link rel="stylesheet" href="/css/experience.css" />
        <link rel="stylesheet" href="/css/contact.css" />
        <link rel="stylesheet" href="/css/canvas.css" />
        <link rel="stylesheet" href="/skin/background-effects.css" />
        <link rel="stylesheet" href="/skin/expertise.css" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <script src="/js/theme.js" defer />
        <script src="/js/sidebar.js" defer />
        {/* Per-page scripts can be added inside each page if needed */}
        <Analytics />
      </body>
    </html>
  )
}
