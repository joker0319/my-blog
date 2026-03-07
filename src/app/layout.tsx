'use client';
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { motion } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: '我的个人博客',
//   description: '基于 Next.js + TS + Tailwind 的极简博客',
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-h-screen h-screen bg-gradient-to-r from-mint-100/90 to-sky-100/90 bg-fixed">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}            
      >
        <main className="max-w-8xl mx-auto pt-20 px-6 pb-10">{children}</main>
      </body>
    </html>
  );
}


