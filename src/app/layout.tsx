import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GenForge",
  description: "For Generating Values",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
