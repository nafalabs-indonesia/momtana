import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="bg-[#3A2318] text-[#FAF7F2] min-h-screen"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Header
        logoSrc="/momtana-logo.png"
        logoAlt="Momtana Restaurant"
        logoFallback="Momtana"
        navLinks={[
          { label: "Menu", href: "#menu" },
          { label: "About", href: "#about" },
          { label: "Events", href: "#events" },
        ]}
        ctaLabel="Reservasi"
        ctaHref="#reservasi"
      />

      <HeroSection />
      <AboutSection />
      <MenuSection />
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}