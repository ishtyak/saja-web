import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saja - Feedback Insights | Ascend with Insights",
  description: "From Surveys to Analytics – everything made smarter with AI. Design, Collect, Analyse. All in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full h-screen flex flex-col">
        <div className="w-full fixed top-0 h-[12vh] z-50"><Navbar /></div>
        <main className="pt-[12vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
