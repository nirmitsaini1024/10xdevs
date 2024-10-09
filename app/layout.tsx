import type { Metadata } from "next";
import "./globals.css";
import { Comfortaa } from "next/font/google";

const fontComfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "10xdevs",
  description: "10x Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${fontComfortaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
