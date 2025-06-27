import type { Metadata } from "next"
import "./globals.css"
import type React from "react"

// Metadata object defines SEO and browser tab information
// This gets automatically used by Next.js for the page title and meta tags
export const metadata: Metadata = {
  title: "Welcome to Minxfy", // Shows in browser tab and search results
  description:
    "We are Minxfy. We create software that makes your life easier. Our mission is to build innovative web applications and productivity tools that help you achieve more with less effort.", // Used for SEO and social media previews
}

// RootLayout is the top-level wrapper for your entire Next.js app
// Every page will be wrapped by this component
export default function RootLayout({
  children, // This represents all the page content that gets rendered inside the layout
}: Readonly<{
  children: React.ReactNode // React.ReactNode allows any valid React content (components, text, etc.)
}>) {
  return (
    // The <html> tag is the root element of your webpage
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Character encoding - ensures text displays correctly */}
        <meta charSet="UTF-8" />
        
        {/* Mobile app settings - what name shows when user adds site to home screen */}
        <meta name="apple-mobile-web-app-title" content="Minxfy" />
        <meta name="application-name" content="Minxfy" />
        
        {/* SEO meta tags - help search engines understand your site */}
        <meta name="description" content={metadata.description ?? undefined} />
        <meta name="keywords" content="Minxfy, software engineering, web applications, productivity tools" />
        <meta name="author" content="Minxfy" />
        
        {/* Favicon links - the small icons that appear in browser tabs and bookmarks */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA manifest - allows your site to be installed as an app */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Responsive design - ensures site works well on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      {/* Body contains all visible content. Classes apply global fonts and styling */}
      <body className="font-dm-sans vsc-initialized">
        {children} {/* This is where your page content gets inserted */}
      </body>
    </html>
  )
}