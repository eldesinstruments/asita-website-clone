import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASITA s.r.l - Tecnologie di Misura | Strumenti di misura elettrica",
  description: "Asita s.r.l è un'azienda specializzata nella produzione e commercializzazione di strumentazione elettrica ed elettronica di misura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <ClientBody className={roboto.className}>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
