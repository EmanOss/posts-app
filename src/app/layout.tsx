import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Posts",
  description: "A list of my posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DesktopNav />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
