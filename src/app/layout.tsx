import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wesley Omoke - Data Science Portfolio",
  description: "Aspiring Data Scientist passionate about uncovering insights and building impactful solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
