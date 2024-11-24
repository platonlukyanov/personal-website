import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google';
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'], 
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Платон Лукьянов",
  description: "Frontend Eng/React, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${nunitoSans.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
