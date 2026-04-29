import { Coffee, UtensilsCrossed, Cake } from "lucide-react";

const menuItems = [
  {
    num: "01",
    Icon: Coffee,
    title: "Breakfast",
    desc: "Mulai hari dengan sempurna bersama sajian pagi kami yang hangat dan menyegarkan",
  },
  {
    num: "02",
    Icon: UtensilsCrossed,
    title: "Main Course",
    desc: "Hidangan utama pilihan chef dengan bahan segar berkualitas dari produk lokal terbaik",
  },
  {
    num: "03",
    Icon: Cake,
    title: "Dessert",
    desc: "Akhiri momen spesialmu dengan manisnya kreasi pastry ala Momtana",
  },
];

export default function MenuSection() {
  return (
    <section
      id="menu"
      style={{
        background: "#3A2318",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "9px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#C9A96E",
          marginBottom: "1.5rem",
        }}
      >
        Apa yang kami sajikan
      </p>

      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#F5F0E8",
          marginBottom: "3.5rem",
        }}
      >
        Pilihan Menu
      </h2>

      {/* Grid */}
      <div
        className="menu-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5px",
          maxWidth: "960px",
          margin: "0 auto 3rem",
          background: "rgba(201,169,110,0.15)",
        }}
      >
        {menuItems.map(({ num, Icon, title, desc }) => (
          <div
            key={num}
            style={{
              background: "#3A2318",
              padding: "2.5rem 2rem",
              textAlign: "left",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.5rem",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "48px",
                fontWeight: 300,
                color: "rgba(201,169,110,0.15)",
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              {num}
            </span>

            <div style={{ marginBottom: "1rem" }}>
              <Icon size={22} color="#C9A96E" strokeWidth={1.5} />
            </div>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "22px",
                fontWeight: 400,
                color: "#F5F0E8",
                marginBottom: "0.5rem",
                fontStyle: "italic",
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(250,247,242,0.5)",
                letterSpacing: "0.05em",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>

      <a
        href="/menu"
        style={{
          display: "inline-block",
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
        Lihat Semua Menu
      </a>

      <style>{`
        @media (max-width: 640px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}