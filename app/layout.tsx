import type { Metadata } from "next";
import "./globals.css";
import ApplicationProvider from "./core/providers/app-provider";
import Header from "./_modules/common/header";
import { ReactLenis } from "lenis/react";
import { ModalProvider } from "./core/hooks/use-modal";

export const metadata: Metadata = {
  title:
    "Peyman Ahmadi | Personal Weblog | Portfolio | Next.js Developer | Remote Developer",
  description:
    "This is a personal weblog of Peyman Ahmadi, A Professional React.js & Next.js Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`**:font-Inter-Regular antialiased`}
        cz-shortcut-listen="true"
      >
        <ModalProvider>
          <ReactLenis root />
          <Header />
          <ApplicationProvider>{children}</ApplicationProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
