export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#F5F0E8",
        color: "#3A2318",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(2rem, 6vw, 6rem)",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(48px, 10vw, 80px)",
          fontWeight: 300,
          color: "#C9A96E",
          lineHeight: 1,
          fontStyle: "italic",
          flexShrink: 0,
        }}
      >
        01
      </div>

      {/* Divider — hidden on small screens */}
      <div
        className="about-divider"
        style={{
          width: "0.5px",
          height: "80px",
          background: "rgba(92,61,46,0.2)",
          flexShrink: 0,
        }}
      />

      <div style={{ maxWidth: "480px", textAlign: "left" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(24px, 5vw, 36px)",
            fontWeight: 300,
            marginBottom: "1rem",
          }}
        >
          Rumah untuk setiap kesempatan
        </h2>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.8,
            color: "#8B6045",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          Momtana hadir membawa kehangatan masakan rumahan yang diolah dengan
          bahan pilihan, disajikan dalam suasana yang nyaman dan penuh cerita.
          Dari sarapan pagi hingga makan malam istimewa.
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .about-divider { display: none; }
        }
      `}</style>
    </section>
  );
}