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
      <Header />

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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .stack-container {
          position: relative;
        }

        .stack-slide {
          position: sticky;
          top: 0;
          /* Setiap slide menutupi slide di bawahnya */
          isolation: isolate;
        }

        /* Section non-hero butuh min-height agar sticky bekerja */
        .stack-slide:not(:first-child) > * {
          min-height: 100vh;
        }

        /* Footer tidak perlu full height */
        .stack-slide:last-child > * {
          min-height: unset;
        }
      `}</style>
    </main>
  );
}