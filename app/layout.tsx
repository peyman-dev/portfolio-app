import type { Metadata } from "next";
import "./globals.css";
import ApplicationProvider from "./core/providers/app-provider";


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
        className={`**:font-Inter-Regular! antialiased`}
      >
        <ApplicationProvider>{children}</ApplicationProvider>
      </body>
    </html>
  );
}
