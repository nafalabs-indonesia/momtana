import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "TikTok",
    href: "#",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z",
  },
];

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: "#1E0F08",
        padding: "3rem clamp(1.5rem, 5vw, 4rem)",
        borderTop: "0.5px solid rgba(201,169,110,0.15)",
        color: "rgba(250,247,242,0.8)",
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between", // Logo di kiri mentok, Wrapper di kanan mentok
          alignItems: "flex-start",
          gap: "3rem",
        }}
      >
        {/* 1. LOGO (Kiri) */}
        <div className="footer-logo">
          <Image
            src="/momtana-logo.png"
            alt="Momtana"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "50px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* 2. INFO WRAPPER (Berisi Hours, Contact, Socials) */}
        <div 
          className="footer-info-wrapper"
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-start", // Default: item nempel kiri
            alignItems: "flex-start",
            gap: "3rem",
            flexWrap: "wrap"
          }}
        >
          
          {/* Kolom A: Jam Buka */}
          <div className="footer-col hours">
            <h4 style={styles.heading}>Opening Hours</h4>
            <div style={styles.textGroup}>
              <strong style={styles.subHeading}>Breakfast</strong>
              <p>Sat - Sun: 8am - 11am</p>
              <p>Public Holiday: 8am - 11am</p>
            </div>
            <div style={{...styles.textGroup, marginTop: '10px'}}>
              <strong style={styles.subHeading}>Lunch & Dinner</strong>
              <p>Mon - Fri: 10am - 10pm</p>
              <p>Sat - Sun: 10am - 10pm</p>
            </div>
          </div>

          {/* Kolom B: Kontak & Lokasi */}
          <div className="footer-col contact-loc">
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={styles.heading}>Contact</h4>
              <p style={styles.text}>0271 8082 1338</p>
              <p style={styles.text}>0813 7520 2828</p>
            </div>
            
            <div>
              <h4 style={styles.heading}>Location</h4>
              <p style={styles.text}>
                Jln. Waduk Cengklik KM 1<br />
                Boyolali, Jawa Tengah, Indonesia
              </p>
            </div>
          </div>

          {/* Kolom C: Sosmed (Paling Kanan di Desktop) */}
          {/* margin-left: auto akan mendorong elemen ini ke ujung kanan container parentnya */}
          <div className="footer-col socials" style={{ marginLeft: 'auto', minWidth: '100px' }}>
             <div style={{ display: "flex", gap: "0.75rem", marginTop: "28px" }}>
              {socialLinks.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={styles.socialIcon}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#C9A96E">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Responsive Mobile */
        @media (max-width: 900px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2.5rem;
          }

          /* Logo Center di Mobile */
          .footer-logo {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .footer-info-wrapper {
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 2rem;
            justify-content: center; /* Reset alignment */
          }

          .footer-col {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* Hapus margin auto desktop agar sosmed kembali ke tengah di mobile */
          .footer-col.socials {
            margin-left: 0 !important;
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}

// Helper styles
const styles = {
  heading: {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#C9A96E",
    margin: "0 0 0.75rem 0",
    fontWeight: 600,
  },
  subHeading: {
    color: "rgba(250,247,242,0.9)",
    fontSize: "12px",
    display: "block",
    marginBottom: "2px",
  },
  text: {
    fontSize: "12px",
    lineHeight: "1.6",
    color: "rgba(250,247,242,0.6)",
    margin: "0 0 4px 0",
  },
  textGroup: {
    fontSize: "12px",
    lineHeight: "1.5",
    color: "rgba(250,247,242,0.6)",
    margin: 0,
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    border: "0.5px solid rgba(201,169,110,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "background 0.2s",
  },
};