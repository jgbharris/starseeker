"use client";
import Navbar from "@/components/navbar";
import "./globals.css";

import { Orbitron } from "next/font/google";
import { usePathname } from "next/navigation";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={orbitron.className}>
        {pathname !== "/" && <Navbar />}
        {children}
      </body>
    </html>
  );
}
