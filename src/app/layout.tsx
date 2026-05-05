import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mascotas Fotos",
  description: "Fotos de mascotas en carreras, parques y paseos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#F8F4EE",
          color: "#31403A",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255, 253, 249, 0.92)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #E8DED3",
          }}
        >
          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#5F7D6E",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "0.02em",
              }}
            >
              Mascotas Fotos
            </Link>

            <nav
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#31403A",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#FFFDF9",
                  border: "1px solid #E8DED3",
                  fontWeight: 600,
                }}
              >
                Inicio
              </Link>

              <Link
                href="/invitado"
                style={{
                  textDecoration: "none",
                  color: "#31403A",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  background: "#DDEFE2",
                  border: "1px solid #BCD5C2",
                  fontWeight: 700,
                }}
              >
                Comenzar
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}