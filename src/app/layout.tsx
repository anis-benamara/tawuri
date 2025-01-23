import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Tawuri",
  description: "Today Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
