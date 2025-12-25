import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = localFont({
  src: "../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-sans",
});

const fontMono = localFont({
  src: "../public/fonts/DMMono-Regular.ttf",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Entropy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
