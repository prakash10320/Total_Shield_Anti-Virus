// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "keen-slider/keen-slider.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TotalShield Antivirus",
  description: "Next-gen security for your devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[70px]">{children}</main> {/* Add top padding to account for fixed navbar */}
        <Footer />
      </body>
    </html>
  );
}
