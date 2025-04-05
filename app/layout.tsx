import type { Metadata } from "next";

import {Manrope} from "next/font/google";
import "./globals.css";


const manrope=Manrope({
    subsets:['latin'],
    weight:['600','800'],
    display:'swap'
})



export const metadata: Metadata = {
  title: "Pricing Component",
  description: "Assignment for frontend developer intern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
