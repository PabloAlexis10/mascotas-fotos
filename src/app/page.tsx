"use client";

import Link from "next/link";
import { useState } from "react";

type Language = "es" | "en" | "pt";

const content = {
  es: {
    brand: "Mascotas Fotos",
    heroTitle: "Encuentra y compra las mejores fotos de tu mascota",
    heroText:
      "Explora galerías de perros y gatos, revisa tus imágenes favoritas y compra fotos de tu mascota de forma rápida y simple.",
    primaryButton: "Ver opciones de compra",
    secondaryButton: "Cómo funciona",
    card1Title: "Explora galerías",
    card1Text: "Descubre fotos disponibles de perros y gatos en distintas colecciones.",
    card2Title: "Encuentra a tu mascota",
    card2Text: "Revisa imágenes por categoría, evento o sesión fotográfica.",
    card3Title: "Compra o descarga",
    card3Text: "Accede a tus fotos favoritas y compra imágenes de tu mascota en línea.",
    sectionTitle: "Cómo funciona",
    sectionText:
      "Esta página está pensada para dueños de mascotas que quieran encontrar y comprar fotos de sus perros o gatos de forma rápida y simple.",
    step1: "Explora las galerías disponibles.",
    step2: "Encuentra las fotos de tu mascota.",
    step3: "Selecciona tus imágenes favoritas.",
    step4: "Compra online con cuenta o como invitado.",
    ctaTitle: "Compra como prefieras",
    ctaText:
      "Crea una cuenta para recibir una experiencia más personalizada y un correo de bienvenida, o compra como invitado de forma rápida y simple.",
    ctaButtonRegister: "Crear cuenta",
    ctaButtonGuest: "Comprar como invitado",
    langLabel: "Idioma",
  },
  en: {
    brand: "Pet Photos",
    heroTitle: "Find and buy the best photos of your pet",
    heroText:
      "Browse dog and cat galleries, review your favorite images and buy photos of your pet quickly and easily.",
    primaryButton: "View purchase options",
    secondaryButton: "How it works",
    card1Title: "Browse galleries",
    card1Text: "Discover available dog and cat photos in different collections.",
    card2Title: "Find your pet",
    card2Text: "Review images by category, event or photo session.",
    card3Title: "Buy or download",
    card3Text: "Access your favorite photos and buy images of your pet online.",
    sectionTitle: "How it works",
    sectionText:
      "This page is designed for pet owners who want to quickly and easily find and buy photos of their dogs or cats.",
    step1: "Browse the available galleries.",
    step2: "Find the photos of your pet.",
    step3: "Select your favorite images.",
    step4: "Buy online with an account or as a guest.",
    ctaTitle: "Buy the way you prefer",
    ctaText:
      "Create an account for a more personalized experience and a welcome email, or continue as a guest for a faster checkout.",
    ctaButtonRegister: "Create account",
    ctaButtonGuest: "Buy as guest",
    langLabel: "Language",
  },
  pt: {
    brand: "Fotos de Pets",
    heroTitle: "Encontre e compre as melhores fotos do seu pet",
    heroText:
      "Explore galerias de cães e gatos, veja suas imagens favoritas e compre fotos do seu pet de forma rápida e simples.",
    primaryButton: "Ver opções de compra",
    secondaryButton: "Como funciona",
    card1Title: "Explore galerias",
    card1Text: "Descubra fotos disponíveis de cães e gatos em diferentes coleções.",
    card2Title: "Encontre seu pet",
    card2Text: "Veja imagens por categoria, evento ou sessão fotográfica.",
    card3Title: "Compre ou baixe",
    card3Text: "Acesse suas fotos favoritas e compre imagens do seu pet online.",
    sectionTitle: "Como funciona",
    sectionText:
      "Esta página foi pensada para donos de pets que querem encontrar e comprar fotos de seus cães ou gatos de forma rápida e simples.",
    step1: "Explore as galerias disponíveis.",
    step2: "Encontre as fotos do seu pet.",
    step3: "Selecione suas imagens favoritas.",
    step4: "Compre online com conta ou como convidado.",
    ctaTitle: "Compre do jeito que preferir",
    ctaText:
      "Crie uma conta para ter uma experiência mais personalizada e receber um e-mail de boas-vindas, ou compre como convidado de forma rápida e simples.",
    ctaButtonRegister: "Criar conta",
    ctaButtonGuest: "Comprar como convidado",
    langLabel: "Idioma",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const t = content[language];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 24px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0f766e",
              fontWeight: 700,
              margin: 0,
            }}
          >
            {t.brand}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <label htmlFor="language" style={{ fontWeight: 600 }}>
              {t.langLabel}
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                background: "white",
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              marginBottom: "20px",
              maxWidth: "800px",
            }}
          >
            {t.heroTitle}
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "720px",
              color: "#4b5563",
              marginBottom: "32px",
            }}
          >
            {t.heroText}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#comprar"
              style={{
                background: "#0f766e",
                color: "white",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {t.primaryButton}
            </a>

            <a
              href="#como-funciona"
              style={{
                border: "1px solid #cbd5e1",
                color: "#1f2937",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
                background: "white",
              }}
            >
              {t.secondaryButton}
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{t.card1Title}</h3>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{t.card1Text}</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{t.card2Title}</h3>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{t.card2Text}</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{t.card3Title}</h3>
            <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{t.card3Text}</p>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 24px 80px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
            {t.sectionTitle}
          </h2>
          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            {t.sectionText}
          </p>

          <ol style={{ paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
            <li>{t.step1}</li>
            <li>{t.step2}</li>
            <li>{t.step3}</li>
            <li>{t.step4}</li>
          </ol>
        </div>
      </section>

      <section
        id="comprar"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            color: "white",
            borderRadius: "24px",
            padding: "36px",
          }}
        >
          <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>
            {t.ctaTitle}
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "720px",
            }}
          >
            {t.ctaText}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/registro"
              style={{
                display: "inline-block",
                background: "white",
                color: "#111827",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              {t.ctaButtonRegister}
            </Link>

            <Link
              href="/invitado"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "white",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #94a3b8",
              }}
            >
              {t.ctaButtonGuest}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}