// app/LoadingProvider.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); 
  const [progress, setProgress] = useState(0); // State untuk lebar progress bar
  const pathname = usePathname();

  useEffect(() => {
    // Reset state saat pathname berubah
    setIsLoading(true);
    setIsFadingOut(false);
    setProgress(0);

    // 1. Animasi Progress Bar (0% -> 100% dalam 1.8 detik)
    // Menggunakan requestAnimationFrame untuk animasi yang smooth (60fps)
    let startTime: number;
    let animationFrameId: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const duration = 1800; // 1.8 detik
      
      // Hitung persentase (max 100)
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    // 2. Timer untuk menyelesaikan loading
    const minLoadTime = setTimeout(() => {
      // Mulai fade-out overlay
      setIsFadingOut(true);

      // Tunggu animasi CSS selesai (0.5 detik) baru hilangkan total
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
        setProgress(0); // Reset progress untuk next load
      }, 500); 

      return () => clearTimeout(fadeOutTimer);
    }, 1800); // Durasi loading minimal sama dengan durasi progress bar

    return () => {
      clearTimeout(minLoadTime);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pathname]);

  // Jika tidak loading, tampilkan konten langsung
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
          opacity: isFadingOut ? 0 : 1,
          transition: "opacity 0.5s ease-out",
          pointerEvents: isFadingOut ? "none" : "auto",
          overflow: "hidden", // Mencegah scrollbar jika progress bar melebihi batas
        }}
      >
        {/* PROGRESS BAR DI ATAS */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "4px", // Ketebalan bar
            width: `${progress}%`, // Lebar dinamis berdasarkan state
            backgroundColor: "#3A2318",
            zIndex: 100000,
            transition: "width 0.1s linear", // Smooth update
            boxShadow: "0 0 10px rgba(201, 169, 110, 0.5)", // Efek glow sedikit
          }}
        />

        <img
          src="/momtana.gif"
          alt="Loading..."
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block", 
          }}
        />
      </div>

      {/* Konten Halaman (Hidden saat loading) */}
      <div style={{ opacity: 0, pointerEvents: "none", position: "absolute", zIndex: -1 }}>
        {children}
      </div>
    </>
  );
}