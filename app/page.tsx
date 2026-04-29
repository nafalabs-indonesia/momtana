import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#3A2318] text-[#FAF7F2] min-h-screen font-montserrat">
      <Header 
        ctaLabel="Reservasi"
        ctaHref="https://wa.me/6289529400600?text=Halo%20Momtana%2C%20saya%20ingin%20melakukan%20reservasi."
        navLinks={[
          { label: "Menu", href: "/menu" },
          { label: "About", href: "#about" },
          { label: "Events", href: "#events" },
        ]}
      />

      {/* Sticky scroll stacking — setiap section menimpa yang sebelumnya */}
      <div className="stack-container">
        
        <div className="stack-slide" style={{ zIndex: 1 }}>
          <HeroSection />
        </div>

        <div className="stack-slide" style={{ zIndex: 2 }}>
          <AboutSection />
        </div>

        <div className="stack-slide" style={{ zIndex: 3 }}>
          <MenuSection />
        </div>

      </div>

      <Footer />
    </main>
  );
}