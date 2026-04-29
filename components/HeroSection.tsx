"use client";

import { useState } from "react";

export default function HeroSection() {
  // State untuk hover button primary (Reservasi)
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  // State untuk hover button secondary (Menu)
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Deco line horizontal */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          right: "10%",
          height: "0.5px",
          transform: "translateY(-50%)",
          background:
            "linear-gradient(to right, transparent, rgba(201,169,110,0.15) 30%, rgba(201,169,110,0.15) 70%, transparent)",
        }}
      />

      {/* Hero Content */}
      <div
        style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 1.5rem" }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#C9A96E",
            opacity: 0.9,
            marginBottom: "2rem",
            fontWeight: 400,
          }}
        >
          Boyolali &mdash; Est. 2024
        </p>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "0 auto 1.5rem",
            width: "280px",
            maxWidth: "80vw",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(201,169,110,0.5)",
            }}
          />
          <div
            style={{
              width: "5px",
              height: "5px",
              border: "0.5px solid #C9A96E",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(201,169,110,0.5)",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(14px, 3vw, 17px)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(250,247,242,0.7)",
            fontStyle: "italic",
            marginBottom: "3rem",
          }}
        >
          Cita rasa hangat, kenangan yang selalu kembali
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Primary Button: Reservasi */}
          <a
            href="/reservasi"
            onMouseEnter={() => setIsPrimaryHovered(true)}
            onMouseLeave={() => setIsPrimaryHovered(false)}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#3A2318",
              background: isPrimaryHovered ? "#F5F0E8" : "#C9A96E",
              padding: "14px 32px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background 0.3s ease",
              cursor: "pointer",
            }}
          >
            Reservasi Meja
          </a>

          {/* Secondary Button: Lihat Menu */}
          <a
            href="#menu"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: isSecondaryHovered ? "#C9A96E" : "#FAF7F2",
              background: "transparent",
              padding: "14px 32px",
              textDecoration: "none",
              fontWeight: 400,
              border: `0.5px solid ${isSecondaryHovered ? "#C9A96E" : "rgba(250,247,242,0.4)"}`,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Lihat Menu
          </a>
        </div>
      </div>
    </section>
  );
}