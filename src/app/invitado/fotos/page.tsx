"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FotosPage() {
  const [nombre, setNombre] = useState("persona");

  useEffect(() => {
    const nombreGuardado = sessionStorage.getItem("nombre_persona");
    if (nombreGuardado) {
      setNombre(nombreGuardado);
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <Link
            href="/invitado"
            style={{
              textDecoration: "none",
              color: "#0f766e",
              fontWeight: 700,
            }}
          >
            ← Volver
          </Link>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontWeight: 600,
            }}
          >
            Paso 2
          </p>
        </div>

        <section
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#0f766e", fontWeight: 700, marginBottom: "12px" }}>
            Tus fotos
          </p>

          <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
            Hola, {nombre}
          </h1>

          <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "24px" }}>
            Aquí quedará preparada la siguiente etapa para cargar, revisar y
            seleccionar las fotos que quieres continuar viendo.
          </p>

          <div
            style={{
              border: "2px dashed #cbd5e1",
              borderRadius: "18px",
              padding: "32px",
              background: "#fafaf9",
              marginBottom: "24px",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
              Módulo de carga y búsqueda
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "16px" }}>
              Aquí integraremos la carga de archivos, la búsqueda y la selección
              de fotos para futuras compras.
            </p>

            <button
              type="button"
              style={{
                background: "#111827",
                color: "white",
                padding: "14px 20px",
                borderRadius: "10px",
                border: "none",
                fontWeight: 700,
              }}
            >
              Próximamente
            </button>
          </div>

          <Link
            href="/"
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "#111827",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              background: "#fff",
              fontWeight: 600,
            }}
          >
            Ir al inicio
          </Link>
        </section>
      </div>
    </main>
  );
}