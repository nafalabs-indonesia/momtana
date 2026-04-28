import Header from "@/components/Header";
import { Coffee, UtensilsCrossed, Cake } from "lucide-react"; // sesuaikan path dengan struktur proyekmu

export default function Home() {
  return (
    <main className="bg-[#3A2318] text-[#FAF7F2] min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Header reusable ── */}
      <Header
        logoSrc="/momtana-cokelat.png"
        logoAlt="Momtana Restaurant"
        logoFallback="Momtana"
        navLinks={[
          { label: "Menu", href: "#menu" },
          { label: "About", href: "#about" },
          { label: "Events", href: "#events" },
        ]}
        ctaLabel="Reservasi"
        ctaHref="#reservasi"
      />

      {/* ── Hero ── */}
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
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(92,61,46,0.5) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(201,169,110,0.08) 0%, transparent 50%), linear-gradient(170deg, #2A1810 0%, #3A2318 40%, #4A2D1E 100%)",
          }}
        />

        {/* Deco lines */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "0.5px",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3) 30%, rgba(201,169,110,0.3) 70%, transparent)",
            pointerEvents: "none",
          }}
        />
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

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
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
            Surakarta &mdash; Est. 2024
          </p>

          {/* Nama restoran */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "88px",
              fontWeight: 300,
              letterSpacing: "0.18em",
              color: "#F5F0E8",
              lineHeight: 1,
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}
          >
            Mom<span style={{ color: "#C9A96E" }}>tana</span>
          </h1>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              margin: "0 auto 1.5rem",
              width: "280px",
            }}
          >
            <div style={{ flex: 1, height: "0.5px", background: "rgba(201,169,110,0.5)" }} />
            <div style={{ width: "5px", height: "5px", border: "0.5px solid #C9A96E", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, height: "0.5px", background: "rgba(201,169,110,0.5)" }} />
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "17px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "rgba(250,247,242,0.7)",
              fontStyle: "italic",
              marginBottom: "3rem",
            }}
          >
            Cita rasa hangat, kenangan yang selalu kembali
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="#reservasi"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#3A2318",
                background: "#C9A96E",
                padding: "14px 32px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Reservasi Meja
            </a>
            <a
              href="#menu"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#FAF7F2",
                background: "transparent",
                padding: "14px 32px",
                textDecoration: "none",
                fontWeight: 400,
                border: "0.5px solid rgba(250,247,242,0.4)",
              }}
            >
              Lihat Menu
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,169,110,0.6)" }}>
            Scroll
          </span>
          <div
            style={{
              width: "0.5px",
              height: "40px",
              background: "linear-gradient(to bottom, #C9A96E, transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── About Strip ── */}
      <section
        id="about"
        style={{
          background: "#F5F0E8",
          color: "#3A2318",
          padding: "6rem 4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6rem",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "80px",
            fontWeight: 300,
            color: "#C9A96E",
            lineHeight: 1,
            fontStyle: "italic",
            flexShrink: 0,
          }}
        >
          01
        </div>
        <div style={{ width: "0.5px", height: "80px", background: "rgba(92,61,46,0.2)", flexShrink: 0 }} />
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "36px",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            Rumah untuk setiap kesempatan
          </h2>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#8B6045", maxWidth: "480px", fontWeight: 300, letterSpacing: "0.04em" }}>
            Momtana hadir membawa kehangatan masakan rumahan yang diolah dengan bahan pilihan,
            disajikan dalam suasana yang nyaman dan penuh cerita. Dari sarapan pagi hingga makan malam istimewa.
          </p>
        </div>
      </section>

      {/* ── Menu Section ── */}
      <section id="menu" style={{ background: "#3A2318", padding: "6rem 4rem", textAlign: "center" }}>
        <p style={{ fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.5rem" }}>
          Apa yang kami sajikan
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "48px",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#F5F0E8",
            marginBottom: "3.5rem",
          }}
        >
          Pilihan Menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5px",
            maxWidth: "960px",
            margin: "0 auto 3rem",
            background: "rgba(201,169,110,0.15)",
          }}
        >
          {[
            { num: "01", Icon: Coffee, title: "Breakfast", desc: "Mulai hari dengan sempurna bersama sajian pagi kami yang hangat dan menyegarkan" },
            { num: "02", Icon: UtensilsCrossed, title: "Main Course", desc: "Hidangan utama pilihan chef dengan bahan segar berkualitas dari produk lokal terbaik" },
            { num: "03", Icon: Cake, title: "Dessert", desc: "Akhiri momen spesialmu dengan manisnya kreasi pastry ala Momtana" },
          ].map(({ num, Icon, title, desc }) => (
            <div
              key={num}
              style={{ background: "#3A2318", padding: "2.5rem 2rem", textAlign: "left", position: "relative", overflow: "hidden", cursor: "pointer" }}
            >
              <span
                style={{
                  position: "absolute", top: "1rem", right: "1.5rem",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "48px", fontWeight: 300, color: "rgba(201,169,110,0.15)", fontStyle: "italic", lineHeight: 1,
                }}
              >
                {num}
              </span>
              <div style={{ marginBottom: "1rem" }}>
                <Icon size={22} color="#C9A96E" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#F5F0E8", marginBottom: "0.5rem", fontStyle: "italic" }}>
                {title}
              </h3>
              <p style={{ fontSize: "11px", color: "rgba(250,247,242,0.5)", letterSpacing: "0.05em", lineHeight: 1.6, fontWeight: 300 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#menu"
          style={{
            display: "inline-block",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#3A2318", background: "#C9A96E", padding: "14px 32px", textDecoration: "none", fontWeight: 500,
          }}
        >
          Lihat Semua Menu
        </a>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#1E0F08", padding: "3rem 4rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "0.5px solid rgba(201,169,110,0.15)",
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 300, color: "#C9A96E", fontStyle: "italic" }}>
          Momtana
        </div>
        <div style={{ textAlign: "center", fontSize: "11px", color: "rgba(250,247,242,0.35)", letterSpacing: "0.08em", lineHeight: 1.8 }}>
          Jl. — Solo, Jawa Tengah<br />
          reservasi@momtana.id &nbsp;&middot;&nbsp; (0271) 000-0000
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            {
              label: "Instagram",
              href: "#",
              path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            },
            {
              label: "Facebook",
              href: "#",
              path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
            },
          ].map(({ label, href, path }) => (
            <a
              key={label} href={href} aria-label={label}
              style={{
                width: "36px", height: "36px", border: "0.5px solid rgba(201,169,110,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#C9A96E" xmlns="http://www.w3.org/2000/svg">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}