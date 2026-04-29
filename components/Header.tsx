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
  { label: "Menu", href: "/menu" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
];

export default function Header({
  logoSrc = "/momtana-logo.png",
  logoAlt = "Momtana",
  logoFallback = "Momtana",
  navLinks = defaultNavLinks,
  ctaLabel = "Reservasi",
  ctaHref = "https://wa.me/6289529400600?text=Halo%20Momtana%2C%20saya%20ingin%20melakukan%20reservasi.",
}: HeaderProps) {
  const [logoError, setLogoError] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
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

      {/* Header Container */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,3rem)] h-25 bg-transparent"
      >
        {/* Burger Button */}
        <button
          className={`mmt-burger${open ? " open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Logo — Center Desktop, Right Mobile */}
        <Link 
          href="/" 
          className={`mmt-logo${open ? " hidden" : ""}`}
          style={{
            // Style ini dipertahankan karena positioning absolute + centering 
            // sering kali lebih stabil dengan inline style daripada utility class 
            // jika tidak ingin membuat class utility baru di CSS global.
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "block",
            textDecoration: "none"
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
              className="font-['Cormorant_Garamond'] text-[#C9A96E] italic font-light tracking-widest text-[22px]"
            >
              {logoFallback}
            </span>
          )}
        </Link>

        {/* CTA — Only Desktop */}
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