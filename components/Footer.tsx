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
        padding: "3rem clamp(1.5rem, 6vw, 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "0.5px solid rgba(201,169,110,0.15)",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/momtana-logo.png"
          alt="Momtana"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: "60px", width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Contact */}
      <div
        style={{
          textAlign: "center",
          fontSize: "11px",
          color: "rgba(250,247,242,0.35)",
          letterSpacing: "0.08em",
          lineHeight: 1.8,
        }}
      >
        Jl. — Solo, Jawa Tengah
        <br />
        reservasi@momtana.id &nbsp;&middot;&nbsp; (0271) 000-0000
      </div>

      {/* Social Icons */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {socialLinks.map(({ label, href, path }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              width: "36px",
              height: "36px",
              border: "0.5px solid rgba(201,169,110,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="#C9A96E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .site-footer {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}