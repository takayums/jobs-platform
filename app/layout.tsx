import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
import "./globals.css";
import ToastSonnerContaier from "@/components/ToasSonner";
import { ClerkProvider } from "@clerk/nextjs";

const righteous = Righteous({
  variable: "--font-righteous",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${righteous.variable} ${poppins.variable} font-poppins min-h-screen flex flex-col`}
        >
          {children}
          <ToastSonnerContaier />
        </body>
      </html>
    </ClerkProvider>
  );
}
