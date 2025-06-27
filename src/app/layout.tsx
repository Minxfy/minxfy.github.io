import type { Metadata } from "next"
import "./globals.css"
import type React from "react"

export const metadata: Metadata = {
  title: "Welcome to Minxfy",
  description:
    "We are Minxfy. We create software that makes your life easier. Our mission is to build innovative web applications and productivity tools that help you achieve more with less effort.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="apple-mobile-web-app-title" content="Minxfy" />
        <meta name="application-name" content="Minxfy" />
        <meta name="description" content={metadata.description ?? undefined} />
        <meta name="keywords" content="Minxfy, software engineering, web applications, productivity tools" />
        <meta name="author" content="Minxfy" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-dm-sans">{children}</body>
    </html>
  )
}
