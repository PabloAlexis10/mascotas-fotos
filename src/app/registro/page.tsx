export default function RegistroPage() {
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
          Crear cuenta
        </p>
        <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
          Regístrate para una experiencia personalizada
        </h1>
        <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: "24px" }}>
          Aquí luego conectaremos el formulario de registro, el correo de bienvenida
          y el acceso a futuras compras e historial.
        </p>

        <form style={{ display: "grid", gap: "16px" }}>
          <input
            type="text"
            placeholder="Nombre"
            style={{ padding: "14px", borderRadius: "10px", border: "1px solid #cbd5e1" }}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            style={{ padding: "14px", borderRadius: "10px", border: "1px solid #cbd5e1" }}
          />
          <button
            type="button"
            style={{
              background: "#0f766e",
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
      </div>
    </main>
  );
}