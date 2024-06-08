import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";

import AppFooter from './components/Footer'
import CustomNav from "./components/CustomNav";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GistFiesta",
  description: "Not your regular Blogsite but a companion",
};

export default function RootLayout({


  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {


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
          <CustomNav/>

          { children}



          </main>
          <AppFooter/>




        </ThemeProvider>
      </body>
    </html>
  );
}
