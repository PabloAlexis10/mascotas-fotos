import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#0f766e",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "16px",
          }}
        >
          Esta página no existe
        </h1>

        <p
          style={{
            color: "#4b5563",
            lineHeight: 1.7,
            marginBottom: "24px",
          }}
        >
          La ruta que intentaste abrir no está disponible o fue movida.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "#0f766e",
            color: "white",
            padding: "14px 22px",
            borderRadius: "12px",
            fontWeight: 700,
          }}
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}