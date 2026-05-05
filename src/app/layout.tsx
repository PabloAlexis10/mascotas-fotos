import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mascotas Fotos",
  description: "Encuentra y compra fotos de tu mascota en un solo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}