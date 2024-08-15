import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Header from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CineFlix - Movie Streaming Platform",
  description: "CineFlix is a movie streaming platform that allows users to watch movies on-demand with no ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col min-h-screen bg-background text-foreground font-sans antialiased", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
