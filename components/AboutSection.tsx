export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#F5F0E8",
        color: "#3A2318",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 8vw, 8rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nomor dekoratif besar di background */}
      <span
        style={{
          position: "absolute",
          right: "clamp(1rem, 6vw, 6rem)",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(160px, 30vw, 320px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(201,169,110,0.1)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        01
      </span>

      {/* Konten utama */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          maxWidth: "720px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label atas */}
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#C9A96E",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Tentang Kami
        </p>

        {/* Heading besar */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: "#3A2318",
            margin: 0,
          }}
        >
          Rumah untuk
          <br />
          setiap kesempatan
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "0.5px",
            background: "rgba(92,61,46,0.3)",
          }}
        />

        {/* Body text — dua kolom di desktop */}
        <div className="about-body">
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.9,
              color: "#8B6045",
              fontWeight: 300,
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            Momtana hadir membawa kehangatan masakan rumahan yang diolah dengan
            bahan pilihan, disajikan dalam suasana yang nyaman dan penuh cerita.
            Dari sarapan pagi hingga makan malam istimewa.
          </p>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.9,
              color: "#8B6045",
              fontWeight: 300,
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            Setiap hidangan kami rancang dengan penuh perhatian; memilih
            bahan lokal terbaik, meracik bumbu dengan tangan, dan menyajikan
            pengalaman makan yang tak terlupakan bagi setiap tamu.
          </p>
        </div>

        {/* CTA link */}
        <a
          href="#menu"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#3A2318",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          {/* Lihat Menu Kami
          <svg width="32" height="1" viewBox="0 0 32 1" fill="none">
            <line x1="0" y1="0.5" x2="32" y2="0.5" stroke="#3A2318" strokeWidth="0.5" />
          </svg> */}
        </a>
      </div>

      <style>{`
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 640px) {
          .about-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}