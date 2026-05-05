import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #F8F4EE 0%, #FDFBF7 50%, #F6EFE8 100%)",
        color: "#31403A",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "56px 20px 36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              display: "inline-block",
              margin: "0 0 16px 0",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#F6DCD2",
              color: "#7A5C52",
              fontWeight: 700,
            }}
          >
            Recuerdos en movimiento
          </p>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.05,
              margin: "0 0 18px 0",
            }}
          >
            Encuentra las mejores fotos de tu mascota en carreras, parques y paseos
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#55635D",
              maxWidth: "620px",
              marginBottom: "26px",
            }}
          >
            Ingresa tu nombre para comenzar una experiencia simple y cercana.
            Queremos que puedas revisar tus fotos con una estética suave, natural y
            pensada para destacar cada momento especial.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "22px",
            }}
          >
            <Link
              href="/invitado"
              style={{
                textDecoration: "none",
                background: "#DDEFE2",
                color: "#31403A",
                padding: "14px 20px",
                borderRadius: "999px",
                border: "1px solid #BCD5C2",
                fontWeight: 700,
              }}
            >
              Comenzar
            </Link>

            <a
              href="#colecciones"
              style={{
                textDecoration: "none",
                background: "#FFFDF9",
                color: "#31403A",
                padding: "14px 20px",
                borderRadius: "999px",
                border: "1px solid #E8DED3",
                fontWeight: 600,
              }}
            >
              Ver estilos de fotos
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["Carreras", "Parque", "Paseos"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "9px 14px",
                  borderRadius: "999px",
                  background: "#FFF7F2",
                  border: "1px solid #EFD9CC",
                  color: "#6B5B52",
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <img
            src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/2a2f73fd4ead546b31d6e90d53faeeb81a22dddf.jpg"
            alt="Perro corriendo feliz en un parque al atardecer"
            width="1050"
            height="700"
            loading="lazy"
            style={{
              width: "100%",
              borderRadius: "28px",
              objectFit: "cover",
              minHeight: "320px",
              boxShadow: "0 18px 40px rgba(92, 86, 76, 0.12)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/07768e55ee0f24147a3be3397654f93d86d946da.jpg"
              alt="Perro saltando durante una competencia de agility"
              width="1024"
              height="716"
              loading="lazy"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "22px",
              }}
            />

            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7b82897328c75ce43887be9ef068aaba6e694593.jpg"
              alt="Perro pequeño paseando con correa en el parque"
              width="2940"
              height="1960"
              loading="lazy"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "22px",
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="colecciones"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "12px 20px 34px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              title: "Competencias",
              text: "Fotos llenas de energía, velocidad y momentos decisivos en carreras o circuitos.",
              bg: "#D9ECF7",
            },
            {
              title: "Parque",
              text: "Escenas relajadas, juegos al aire libre y retratos naturales en espacios verdes.",
              bg: "#DDEFE2",
            },
            {
              title: "Paseos",
              text: "Recuerdos cotidianos con una mirada cálida, cercana y espontánea.",
              bg: "#F6D6C9",
            },
          ].map((item) => (
            <article
              key={item.title}
              style={{
                background: item.bg,
                borderRadius: "24px",
                padding: "24px",
                border: "1px solid rgba(49,64,58,0.08)",
              }}
            >
              <h2 style={{ margin: "0 0 10px 0", fontSize: "22px" }}>{item.title}</h2>
              <p style={{ margin: 0, lineHeight: 1.7, color: "#42514A" }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "10px 20px 64px",
        }}
      >
        <div
          style={{
            background: "#FFFDF9",
            border: "1px solid #E8DED3",
            borderRadius: "30px",
            padding: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "#5F7D6E", fontWeight: 700, marginBottom: "10px" }}>
              Cómo funciona
            </p>
            <h2 style={{ margin: "0 0 14px 0", fontSize: "34px" }}>
              Un proceso simple para encontrar tus recuerdos
            </h2>
            <p style={{ margin: 0, color: "#55635D", lineHeight: 1.8 }}>
              Solo necesitamos tu nombre para comenzar. Después podrás avanzar a la
              sección donde prepararemos la búsqueda y selección de fotos.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            {[
              "1. Ingresas tu nombre.",
              "2. Continúas a tu espacio de fotos.",
              "3. Luego podrás revisar y elegir imágenes.",
            ].map((step) => (
              <div
                key={step}
                style={{
                  background: "#F8F4EE",
                  border: "1px solid #E8DED3",
                  borderRadius: "18px",
                  padding: "16px 18px",
                  fontWeight: 600,
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}