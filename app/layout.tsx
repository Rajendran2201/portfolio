import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import ClientBody from "@/components/ClientBody";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raj's Portfolio",
  description: "Portfolio of Raj, an undergraduate AI student who loves building things in public, writing blogs, and teaching.",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Raj's Portfolio",
    description: "Portfolio of Raj, an undergraduate AI student who loves building things in public, writing blogs, and teaching.",
    url: "https://your-portfolio-url.com",
    siteName: "Raj's Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body suppressHydrationWarning>
        <ClientBody className={`${quicksand.variable} antialiased`}>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}