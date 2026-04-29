"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Coffee, UtensilsCrossed, Cake, Download } from "lucide-react";

// --- Tipe Data ---
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

// --- Data Menu ---
const menuData: MenuCategory[] = [
  {
    id: "main-course", // ID tanpa spasi untuk anchor link yang valid
    title: "Main Course",
    subtitle: "Cita Rasa Khas",
    items: [
      {
        name: "Ayam Goreng Laos Sambal Mangga",
        description: "Ayam kampung goreng dengan bumbu laos rempah pilihan, disajikan dengan sambal mangga segar yang pedas-manis",
        price: "Rp 45.000",
      },
      {
        name: "Bebek Goreng Laos Sambal Mangga",
        description: "Bebek goreng khas dengan bumbu laos yang meresap hingga tulang, dilengkapi sambal mangga istimewa",
        price: "Rp 55.000",
      },
      {
        name: "Ayam Goreng Laos + Nasi",
        description: "Paket lengkap ayam goreng laos dengan nasi putih hangat, sambal mangga, dan lalapan segar",
        price: "Rp 52.000",
      },
      {
        name: "Bebek Goreng Laos + Nasi",
        description: "Paket bebek goreng laos dengan nasi putih, sambal mangga, lalapan, dan sambal terasi",
        price: "Rp 62.000",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Sarapan Pagi",
    items: [
      {
        name: "Nasi Uduk Komplit",
        description: "Nasi uduk hangat dengan ayam suwir, telur balado, tempe orek, sambal, dan kerupuk",
        price: "Rp 28.000",
      },
      {
        name: "Bubur Ayam Cianjur",
        description: "Bubur ayam dengan kuah kuning gurih, suwiran ayam, cakwe, dan kerupuk",
        price: "Rp 25.000",
      },
      {
        name: "Roti Bakar Kaya",
        description: "Roti bakar renyah dengan selai kaya homemade dan mentega",
        price: "Rp 18.000",
      },
      {
        name: "Pancake Pisang",
        description: "Pancake lembut dengan irisan pisang, madu, dan taburan almond",
        price: "Rp 22.000",
      },
      {
        name: "Telur Dadar Laos",
        description: "Telur dadar spesial dengan taburan serundeng laos gurih",
        price: "Rp 20.000",
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    subtitle: "Manis Penutup",
    items: [
      {
        name: "Es Teler Nusantara",
        description: "Alpukat, kelapa muda, nangka, dengan kuah susu dan sirup gula merah",
        price: "Rp 22.000",
      },
      {
        name: "Puding Mangga Sutra",
        description: "Puding sutra lembut dengan lapisan mangga segar dan saus vanila",
        price: "Rp 20.000",
      },
      {
        name: "Klepon Gula Merah",
        description: "Klepon tradisional isi gula merah cair dengan taburan kelapa parut",
        price: "Rp 15.000",
      },
      {
        name: "Es Kopi Susu Jelly",
        description: "Es kopi susu dengan jelly kopi homemade yang kenyal",
        price: "Rp 24.000",
      },
      {
        name: "Pisang Goreng Madu",
        description: "Pisang goreng renyah dengan siraman madu dan taburan wijen",
        price: "Rp 18.000",
      },
    ],
  },
  {
    id: "kopi",
    title: "Kopi",
    subtitle: "Seduh & Nikmati",
    items: [
      {
        name: "Kopi Tubruk",
        description: "Kopi tubruk tradisional dengan campuran gula merah alami",
        price: "Rp 15.000",
      },
      {
        name: "Es Kopi Susu Boyolali",
        description: "Signature iced coffee dengan perpaduan susu segar dan gula aren",
        price: "Rp 22.000",
      },
      {
        name: "Kopi Hitam V60",
        description: "V60 pour over dengan biji kopi arabika pilihan, aroma floral dan fruity",
        price: "Rp 28.000",
      },
      {
        name: "Kopi Susu Gula Aren",
        description: "Perpaduan espresso dengan susu steamed dan gula aren cair",
        price: "Rp 24.000",
      },
      {
        name: "Affogato",
        description: "Es krim vanila yang disiram dengan shot espresso panas",
        price: "Rp 26.000",
      },
      {
        name: "Matcha Latte",
        description: "Matcha premium Jepang dengan susu segar yang creamy",
        price: "Rp 25.000",
      },
    ],
  },
];

export default function MenuPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animasi fade-in saat halaman dimuat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fungsi smooth scroll ke kategori
  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset untuk header fixed
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="bg-[#3A2318] text-[#FAF7F2] min-h-screen font-montserrat relative">
      
      {/* LAYER 1: STICKY VIDEO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/menu.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Warm Tint */}
        <div className="absolute inset-0 bg-[#3A2318]/20" />
      </div>

      {/* LAYER 2: HEADER (Fixed di atas video) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* LAYER 3: SCROLLABLE CONTENT */}
      <div 
        ref={contentRef}
        className="relative z-10"
      >
        
        {/* HERO SECTION MENU */}
        <div className={`min-h-screen flex flex-col items-center justify-center px-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-center mb-10">
            <p className="text-[#C9A96E] text-[15px] tracking-[0.35em] uppercase font-medium">
              Jelajahi Rasa
            </p>
            
            {/* <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light italic text-[#FAF7F2] mb-2">
              Cita Rasa Sejati
            </h1> */}
          </div>

          {/* Category CTAs - Style disesuaikan dengan tombol Download */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            <button 
              onClick={() => scrollToCategory('main-course')}
              className="inline-flex items-center justify-center gap-3 border border-[#C9A96E] text-[#C9A96E] font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase font-bold py-4 px-8 hover:bg-[#C9A96E] hover:text-[#3A2318] transition-all duration-300 min-w-40"
            >
              <UtensilsCrossed size={16} />
              Main Course
            </button>
            
            <button 
              onClick={() => scrollToCategory('breakfast')}
              className="inline-flex items-center justify-center gap-3 border border-[#C9A96E] text-[#C9A96E] font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase font-bold py-4 px-8 hover:bg-[#C9A96E] hover:text-[#3A2318] transition-all duration-300 min-w-40"
            >
              <Coffee size={16} />
              Breakfast
            </button>

            <button 
              onClick={() => scrollToCategory('dessert')}
              className="inline-flex items-center justify-center gap-3 border border-[#C9A96E] text-[#C9A96E] font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase font-bold py-4 px-8 hover:bg-[#C9A96E] hover:text-[#3A2318] transition-all duration-300 min-w-40"
            >
              <Cake size={16} />
              Dessert
            </button>
          </div>

          {/* Animated Scroll Down Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-80 cursor-pointer" onClick={() => scrollToCategory('main-course')}>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E] font-medium">Lihat Menu</span>
            <ArrowDown size={24} className="text-[#C9A96E]" strokeWidth={1.5} />
          </div>
        </div>

        {/* DAFTAR MENU (List) - Diberi jarak atas agar tidak terlalu mepet */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-32 pb-20 pt-12">
          {menuData.map((category, catIndex) => (
            <div
              key={category.id}
              id={category.id}
              className={`scroll-mt-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 0.1}s` }}
            >
              {/* Header Kategori */}
              <div className="text-center mb-12">
                <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#C9A96E] uppercase tracking-widest mb-3">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="font-['Cormorant_Garamond'] text-lg italic text-white/50 tracking-wide">
                    {category.subtitle}
                  </p>
                )}
                <div className="w-16 h-px bg-[#C9A96E]/40 mx-auto mt-6"></div>
              </div>

              {/* Item List */}
              <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline gap-4 pb-4 border-b border-[#C9A96E]/15 last:border-0 group hover:bg-white/5 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Montserrat'] text-sm md:text-base font-medium text-[#FAF7F2] mb-1 leading-snug group-hover:text-[#C9A96E] transition-colors">
                        {item.name}
                      </h4>
                      <p className="font-['Cormorant_Garamond'] text-sm italic text-white/55 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right pt-1">
                      <span className="font-['Montserrat'] text-sm text-[#C9A96E] whitespace-nowrap font-medium">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DOWNLOAD MENU CTA (Placeholder) */}
        <div className={`text-center py-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <Link
            href="/menu-placeholder.pdf" // Ganti dengan path PDF asli nanti
            download
            className="inline-flex items-center gap-3 border border-[#C9A96E] text-[#C9A96E] font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase font-bold py-4 px-10 hover:bg-[#C9A96E] hover:text-[#3A2318] transition-all duration-300"
          >
            <Download size={16} />
            Download Full Menu
          </Link>
        </div>

      </div>

      {/* FOOTER DENGAN EFEK STACKING */}
      <div className="stack-container relative z-20">
        <div className="stack-slide" style={{ zIndex: 1 }}>
          <Footer />
        </div>
      </div>

    </main>
  );
}