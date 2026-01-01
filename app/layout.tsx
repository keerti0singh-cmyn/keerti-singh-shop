import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Keerti Singh - Local Retail Shop in Mauaima, Prayagraj",
  description: "Your trusted local retail shop in Mauaima, Prayagraj. Quality groceries, household items, and personal care products. Shop near you for all your daily needs.",
  keywords: ["Mauaima shop", "local shop in Prayagraj", "Keerti Singh shop Mauaima", "shop near me", "retail shop UP East"],
  authors: [{ name: "Keerti Singh" }],
  openGraph: {
    title: "Keerti Singh - Local Retail Shop in Mauaima, Prayagraj",
    description: "Your trusted local retail shop in Mauaima, Prayagraj. Quality groceries, household items, and personal care products.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerti Singh - Local Retail Shop",
    description: "Your trusted local retail shop in Mauaima, Prayagraj",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
