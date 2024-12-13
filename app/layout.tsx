"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Analytics } from '@vercel/analytics/next';
import { metadata } from "./metadata";
import AppFooter from './components/Footer'
import CustomNav from "./components/CustomNav";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";




const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({


  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
          <Navbar/>
          <main className="max-w-2xl py-4 px-5  mx-auto ">
          <CustomNav activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
          { children}
          <Analytics/>
          <Toaster/>
          </main>
          <AppFooter/>
        </ThemeProvider>
      </body>
    </html>
  );
}
