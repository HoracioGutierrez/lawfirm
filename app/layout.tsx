import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: " E&L | Estudio Jurídico",
  description: "Estudio Jurídico Estevez & Landriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(dmSerifDisplay.className,"bg-[#E8E9E1]")}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
