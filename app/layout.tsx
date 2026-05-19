import type { Metadata } from "next";
import { geistSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Jurídico Chile",
  description:
    "Sitio web oficial del Estudio Jurídico Chile, ofreciendo servicios legales de alta calidad en diversas áreas del derecho. Contáctanos para asesoría personalizada y soluciones jurídicas efectivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${geistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
