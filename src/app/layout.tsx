import type { Metadata, Viewport } from "next";
import Background from "@/components/Background";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "S42.site",
  description: "Software Engineer & Developer Portfolio",
  keywords: [
    "developer",
    "portfolio",
    "software engineer",
    "coding",
    "web development",
  ],
  authors: [{ name: "Musa", url: "https://github.com/S42yt" }],
  creator: "Musa",
  publisher: "S42",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-background text-foreground selection:bg-foreground/10">
        <Navbar />
        <Background variant="gradient" blur animated>
          <main className="flex-grow pt-28 pb-24 px-4 sm:px-6 mx-auto w-full max-w-7xl">
            {children}
          </main>
          <Footer />
        </Background>
        <ToTop />
      </body>
    </html>
  );
}
