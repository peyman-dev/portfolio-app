import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApplicationProvider from "./core/providers/app-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peyman Ahmadi | Personal Weblog | Portfolio | Next.js Developer | Remote Developer",
  description: "This is a personal weblog of Peyman Ahmadi, A Professional React.js & Next.js Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApplicationProvider>{children}</ApplicationProvider>
      </body>
    </html>
  );
}
