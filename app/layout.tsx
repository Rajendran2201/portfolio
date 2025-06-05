import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "@/components/ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raj's Portfolio",
  description: "Portfolio of Raj, an undergraduate AI student who loves building things in public, writing blogs, and teaching.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientBody className={`${inter.variable} antialiased`}>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}