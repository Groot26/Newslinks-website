import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/_components/Navbar";
import Footer from "./_components/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsLinks",
  description: "NewsLinks the news app",
  metadataBase: new URL('https://newslinks-website.vercel.app/'),
  openGraph: {
    title: 'NewsLinks',
    description: 'The official Website of NewsLinks.',
    url: 'https://newslinks-website.vercel.app/',
    siteName: 'NewsLinks',
    images: [
      {
        url: 'https://newslinks-website.vercel.app/assets/OG.png',
        width: 800,
        height: 600,
        alt: 'NewsLinks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsLinks',
    description: 'The official Website of NewsLinks.',
    images: [
      {
        url: 'https://newslinks-website.vercel.app/assets/OG.png',
        width: 800,
        height: 600,
        alt: 'NewsLinks',
      },
    ],
  },
  icons: {
    icon: 'https://newslinks-website.vercel.app/app/favicon.ico',
    shortcut: 'https://newslinks-website.vercel.app/app/favicon.ico',
    apple: 'https://newslinks-website.vercel.app/app/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main >

        {children}
      </main>
        <Footer/>
        </body>
    </html>
  );
}
