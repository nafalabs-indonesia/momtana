// app/LoadingProvider.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State untuk animasi keluar
  const pathname = usePathname();

  useEffect(() => {
    // 1. Aktifkan loading & reset fading
    setIsLoading(true);
    setIsFadingOut(false);

    // 2. Durasi minimal loading (misal 1.5 detik)
    const minLoadTime = setTimeout(() => {
      // Mulai proses fade-out
      setIsFadingOut(true);

      // Tunggu animasi CSS selesai (misal 0.5 detik) baru hilangkan total
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Sesuaikan dengan duration transition di CSS

      return () => clearTimeout(fadeOutTimer);
    }, 1800); // Durasi loading minimal

    return () => clearTimeout(minLoadTime);
  }, [pathname]);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      {/* Overlay Loading */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF7F2",
          // Animasi Fade Out
          opacity: isFadingOut ? 0 : 1,
          transition: "opacity 0.5s ease-out",
          pointerEvents: isFadingOut ? "none" : "auto",
        }}
      >
        <img
          src="/momtana.gif"
          alt="Loading..."
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // Pastikan GIF tidak terdistorsi saat resize window
            display: "block", 
          }}
        />
      </div>

      {/* Konten Halaman (Tetap dirender di background tapi transparan) */}
      <div style={{ opacity: 0, pointerEvents: "none" }}>
        {children}
      </div>
    </>
  );
}