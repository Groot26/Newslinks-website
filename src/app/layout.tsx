import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_components/Navbar";
import Footer from "./_components/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsLinks",
  description: "NewsLinks the news app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>
        {children}
        </body>
        <Footer/>
    </html>
  );
}
