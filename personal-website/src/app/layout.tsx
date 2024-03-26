import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationLayout from './navigation/layout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allan Habiger",
  description: "My personal portfolio of the projects I've done!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationLayout></NavigationLayout>
      {children}
    </html>
  );
}
