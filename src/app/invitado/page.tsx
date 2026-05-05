"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccesoRapidoPage() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  useEffect(() => {
    const nombreGuardado = sessionStorage.getItem("nombre_persona");
    if (nombreGuardado) {
      setNombre(nombreGuardado);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nombreLimpio = nombre.trim();

    if (!nombreLimpio) {
      setMensaje("El nombre es obligatorio.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombreLimpio);

    const res = await fetch("/api/invitado", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMensaje(data.message);
      return;
    }

    sessionStorage.setItem("nombre_persona", nombreLimpio);
    router.push("/invitado/fotos");
  }

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
          maxWidth: "720px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "32px",
          border: "1px solid #e5e7eb",
        }}
      >
        <p style={{ color: "#0f766e", fontWeight: 700, marginBottom: "12px" }}>
          Acceso rápido
        </p>
        <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
          Ingresa tu nombre para continuar
        </h1>
        <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "24px" }}>
          Guardaremos tu nombre para poder referirnos a ti durante el proceso y
          facilitar futuras mejoras en la experiencia.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
          <input
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ padding: "14px", borderRadius: "10px", border: "1px solid #cbd5e1" }}
          />
          <button
            type="submit"
            style={{
              background: "#111827",
              color: "white",
              padding: "14px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 700,
            }}
          >
            Continuar
          </button>
        </form>

        {mensaje && (
          <p style={{ marginTop: "18px", color: "#111827", fontWeight: 600 }}>
            {mensaje}
          </p>
        )}
      </div>
    </main>
  );
}