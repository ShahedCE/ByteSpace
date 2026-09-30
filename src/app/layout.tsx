import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace New",
  description: "Get Access to Hundreds Courses Available. Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} min-h-screen bg-[#003BE2] text-[#F5F5F6] antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
