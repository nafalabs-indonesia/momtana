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
  logoSrc = "/momtana-logo.png",
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

        /* CTA di header — tampil di desktop, hidden di mobile */
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
          white-space: nowrap;
          transition: background 0.25s, opacity 0.3s ease, visibility 0.3s ease;
        }
        .mmt-cta-header:hover { background: #F5F0E8; }
        .mmt-cta-header.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        /* Sembunyikan CTA header di mobile */
        @media (max-width: 640px) {
          .mmt-cta-header { display: none; }
        }

        /* Drawer */
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
        .mmt-drawer.open { transform: translateX(0); }

        /* Overlay */
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

        /* Nav links */
        .mmt-nav-item { overflow: hidden; }
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
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1), color 0.25s ease;
        }
        .mmt-drawer.open .mmt-nav-link { transform: translateY(0); }
        .mmt-nav-link:hover { color: #C9A96E; }

        .mmt-drawer.open .mmt-nav-item:nth-child(1) .mmt-nav-link { transition-delay: 0.08s; }
        .mmt-drawer.open .mmt-nav-item:nth-child(2) .mmt-nav-link { transition-delay: 0.13s; }
        .mmt-drawer.open .mmt-nav-item:nth-child(3) .mmt-nav-link { transition-delay: 0.18s; }

        /* Divider di dalam drawer */
        .mmt-drawer-divider {
          height: 0.5px;
          background: rgba(201,169,110,0.15);
          margin: 2.5rem 0;
        }

        /* CTA di dalam drawer */
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

        /* Di desktop, sembunyikan CTA di dalam drawer */
        @media (min-width: 641px) {
          .mmt-drawer-cta-wrap { display: none; }
        }

        /* Logo fade out saat drawer terbuka — hanya mobile */
        .mmt-logo {
          transition: opacity 0.35s ease, visibility 0.35s ease;
        }
        @media (max-width: 640px) {
          .mmt-logo {
            position: absolute !important;
            left: unset !important;
            right: clamp(1.5rem, 5vw, 3rem) !important;
            transform: none !important;
          }
          .mmt-logo.hidden {
            opacity: 0;
            visibility: hidden;
          }
          .mmt-logo-img {
            height: 60px !important;
          }
        }

        /* Footer drawer */
        .mmt-drawer-footer {
          margin-top: auto;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(250,247,242,0.2);
          opacity: 0;
          transition: opacity 0.4s ease 0.35s;
        }
        .mmt-drawer.open .mmt-drawer-footer { opacity: 1; }
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

        {/* CTA hanya muncul di dalam drawer saat mobile */}
        <div className="mmt-drawer-cta-wrap">
          <div className="mmt-drawer-divider" />
          <Link
            href={ctaHref}
            className="mmt-drawer-cta"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>

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
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
          height: "100px",
          background: "transparent",
        }}
      >
        {/* Burger */}
        <button
          className={`mmt-burger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Logo — center desktop, right mobile */}
        <div
          className={`mmt-logo${open ? " hidden" : ""}`}
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
              className="mmt-logo-img"
              style={{ height: "70px", width: "auto", objectFit: "contain" }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "22px",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "#C9A96E",
                fontStyle: "italic",
              }}
            >
              {logoFallback}
            </span>
          )}
        </div>

        {/* CTA — hanya desktop */}
        <Link
          href={ctaHref}
          className={`mmt-cta-header${open ? " hidden" : ""}`}
        >
          {ctaLabel}
        </Link>
      </header>
    </>
  );
}