import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Modern and Minimalistic Portfolio",
};

export default function RootLayout({
  children,
  hero,
  grid,
}: Readonly<{
  children: React.ReactNode;
  hero: React.ReactNode;
  grid: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {hero} {/* Hero Section */}
          {grid} {/* Grid Section */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
