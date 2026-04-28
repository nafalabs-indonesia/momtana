"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoFallback?: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
];

export default function Header({
  logoSrc = "/momtana-cokelat.png",
  logoAlt = "Momtana",
  logoFallback = "Momtana",
  navLinks = defaultNavLinks,
  ctaLabel = "Reservasi",
  ctaHref = "#reservasi",
}: HeaderProps) {
  const [logoError, setLogoError] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .mmt-burger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
          width: 48px;
          height: 48px;
        }
        .mmt-burger span {
          display: block;
          height: 1px;
          background: #C9A96E;
          transform-origin: center;
          transition: transform 0.35s cubic-bezier(0.76, 0, 0.24, 1),
                      opacity 0.2s ease,
                      width 0.35s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .mmt-burger span:nth-child(1) { width: 40px; }
        .mmt-burger span:nth-child(2) { width: 28px; }
        .mmt-burger span:nth-child(3) { width: 34px; }
        .mmt-burger.open span:nth-child(1) {
          width: 36px;
          transform: translateY(8px) rotate(45deg);
        }
        .mmt-burger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .mmt-burger.open span:nth-child(3) {
          width: 36px;
          transform: translateY(-8px) rotate(-45deg);
        }
        .mmt-cta-header {
          transition: background 0.25s, opacity 0.3s ease, visibility 0.3s ease !important;
        }
        .mmt-cta-header.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .mmt-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(340px, 85vw);
          height: 100vh;
          background: #1E0F08;
          border-left: 0.5px solid rgba(201,169,110,0.15);
          z-index: 40;
          display: flex;
          flex-direction: column;
          padding: 120px 3rem 3rem;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .mmt-drawer.open {
          transform: translateX(0);
        }

        .mmt-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 8, 4, 0.6);
          z-index: 39;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
          backdrop-filter: blur(2px);
        }
        .mmt-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mmt-nav-item {
          overflow: hidden;
        }
        .mmt-nav-link {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 40px;
          font-weight: 300;
          font-style: italic;
          color: rgba(250,247,242,0.35);
          text-decoration: none;
          letter-spacing: 0.04em;
          line-height: 1.2;
          padding: 0.4rem 0;
          transition: color 0.25s ease;
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1), color 0.25s ease;
        }
        .mmt-drawer.open .mmt-nav-link {
          transform: translateY(0);
        }
        .mmt-nav-link:hover { color: #C9A96E; }

        .mmt-drawer.open .mmt-nav-item:nth-child(1) .mmt-nav-link { transition-delay: 0.08s; }
        .mmt-drawer.open .mmt-nav-item:nth-child(2) .mmt-nav-link { transition-delay: 0.13s; }
        .mmt-drawer.open .mmt-nav-item:nth-child(3) .mmt-nav-link { transition-delay: 0.18s; }

        .mmt-drawer-divider {
          height: 0.5px;
          background: rgba(201,169,110,0.15);
          margin: 2.5rem 0;
        }

        .mmt-drawer-cta {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3A2318;
          background: #C9A96E;
          padding: 14px 28px;
          text-decoration: none;
          font-weight: 500;
          display: inline-block;
          transition: background 0.25s;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease, background 0.25s;
        }
        .mmt-drawer.open .mmt-drawer-cta {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.28s;
        }
        .mmt-drawer-cta:hover { background: #F5F0E8; }

        .mmt-drawer-footer {
          margin-top: auto;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(250,247,242,0.2);
          opacity: 0;
          transition: opacity 0.4s ease 0.35s;
        }
        .mmt-drawer.open .mmt-drawer-footer {
          opacity: 1;
        }
        .mmt-cta-header {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3A2318;
          background: #C9A96E;
          padding: 10px 22px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.25s;
          white-space: nowrap;
        }
        .mmt-cta-header:hover {
          background: #F5F0E8;
        }
      `}</style>

      {/* Overlay */}
      <div
        className={`mmt-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div className={`mmt-drawer${open ? " open" : ""}`}>
        <nav>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href} className="mmt-nav-item">
                <Link
                  href={link.href}
                  className="mmt-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mmt-drawer-footer">
          © {new Date().getFullYear()} Momtana. Solo, Jawa Tengah.
        </div>
      </div>

      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3rem",
          height: "100px",
          background: "transparent",
        }}
      >
        {/* ── Burger ── */}
        <button
          className={`mmt-burger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* ── Center: Logo ── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {!logoError ? (
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={0}
              height={0}
              sizes="100vw"
              priority
              style={{ height: "80px", width: "auto", objectFit: "contain" }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "22px",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "#6B3E26",
                fontStyle: "italic",
              }}
            >
              {logoFallback}
            </span>
          )}
        </div>

        {/* ── Right: CTA ── */}
        <Link href={ctaHref} className={`mmt-cta-header${open ? " hidden" : ""}`}>
          {ctaLabel}
        </Link>
      </header>
    </>
  );
}