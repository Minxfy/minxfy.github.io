import type { Metadata } from "next";
import "./globals.css";
import type React from "react";

export const metadata: Metadata = {
  title: "Welcome to CosmoCrafters",
  description:
    "We are a group of recent graduates studying software engineering. Currently, we are building web applications and tools mainly to improve your productivity and workflow to make your life easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
