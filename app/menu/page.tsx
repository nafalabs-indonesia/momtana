"use client";

import Header from "@/components/Header";
import { useRef, useEffect, useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Signature",
    subtitle: "Cita Rasa Khas",
    items: [
      {
        name: "Ayam Goreng Laos Sambal Mangga",
        description:
          "Ayam kampung goreng dengan bumbu laos rempah pilihan, disajikan dengan sambal mangga segar yang pedas-manis",
        price: "Rp 45.000",
      },
      {
        name: "Bebek Goreng Laos Sambal Mangga",
        description:
          "Bebek goreng khas dengan bumbu laos yang meresap hingga tulang, dilengkapi sambal mangga istimewa",
        price: "Rp 55.000",
      },
      {
        name: "Ayam Goreng Laos + Nasi",
        description:
          "Paket lengkap ayam goreng laos dengan nasi putih hangat, sambal mangga, dan lalapan segar",
        price: "Rp 52.000",
      },
      {
        name: "Bebek Goreng Laos + Nasi",
        description:
          "Paket bebek goreng laos dengan nasi putih, sambal mangga, lalapan, dan sambal terasi",
        price: "Rp 62.000",
      },
    ],
  },
  {
    title: "Breakfast",
    subtitle: "Sarapan Pagi",
    items: [
      {
        name: "Nasi Uduk Komplit",
        description:
          "Nasi uduk hangat dengan ayam suwir, telur balado, tempe orek, sambal, dan kerupuk",
        price: "Rp 28.000",
      },
      {
        name: "Bubur Ayam Cianjur",
        description:
          "Bubur ayam dengan kuah kuning gurih, suwiran ayam, cakwe, dan kerupuk",
        price: "Rp 25.000",
      },
      {
        name: "Roti Bakar Kaya",
        description: "Roti bakar renyah dengan selai kaya homemade dan mentega",
        price: "Rp 18.000",
      },
      {
        name: "Pancake Pisang",
        description:
          "Pancake lembut dengan irisan pisang, madu, dan taburan almond",
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
    title: "Dessert",
    subtitle: "Manis Penutup",
    items: [
      {
        name: "Es Teler Nusantara",
        description:
          "Alpukat, kelapa muda, nangka, dengan kuah susu dan sirup gula merah",
        price: "Rp 22.000",
      },
      {
        name: "Puding Mangga Sutra",
        description:
          "Puding sutra lembut dengan lapisan mangga segar dan saus vanila",
        price: "Rp 20.000",
      },
      {
        name: "Klepon Gula Merah",
        description:
          "Klepon tradisional isi gula merah cair dengan taburan kelapa parut",
        price: "Rp 15.000",
      },
      {
        name: "Es Kopi Susu Jelly",
        description: "Es kopi susu dengan jelly kopi homemade yang kenyal",
        price: "Rp 24.000",
      },
      {
        name: "Pisang Goreng Madu",
        description:
          "Pisang goreng renyah dengan siraman madu dan taburan wijen",
        price: "Rp 18.000",
      },
    ],
  },
  {
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
        description:
          "Signature iced coffee dengan perpaduan susu segar dan gula aren",
        price: "Rp 22.000",
      },
      {
        name: "Kopi Hitam V60",
        description:
          "V60 pour over dengan biji kopi arabika pilihan, aroma floral dan fruity",
        price: "Rp 28.000",
      },
      {
        name: "Kopi Susu Gula Aren",
        description:
          "Perpaduan espresso dengan susu steamed dan gula aren cair",
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

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        // Hapus minHeight 100vh dari container utama agar scroll natural
        background: "#3A2318",
      }}
    >
      {/* 
         LAYER 1: STICKY VIDEO BACKGROUND 
         Menggunakan position: fixed agar tetap di tempat saat scroll
      */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0, // Paling bawah
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src="/menu.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        {/* Subtle warm tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(58, 35, 24, 0.2)",
          }}
        />
      </div>

      {/* 
         LAYER 2: HEADER (Sticky/Fixed di atas video)
      */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
        }}
      >
        <Header />
      </div>

      {/* 
         LAYER 3: SCROLLABLE CONTENT 
         Posisi relative agar mengalir di atas video fixed
      */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "100px", // Memberi jarak dari Header
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            marginTop: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#C9A96E",
              opacity: 0.9,
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}
          >
            Menu Kami
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              margin: "0 auto 1.5rem",
              width: "200px",
              maxWidth: "60vw",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "rgba(201,169,110,0.5)",
              }}
            />
            <div
              style={{
                width: "5px",
                height: "5px",
                border: "0.5px solid #C9A96E",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                flex: 1,
                height: "0.5px",
                background: "rgba(201,169,110,0.5)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "#FAF7F2",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Cita Rasa Sejati
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(250,247,242,0.6)",
              letterSpacing: "0.05em",
            }}
          >
            Dari dapur kami, untuk meja Anda
          </p>
        </div>

        {/* Menu Categories */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          {menuData.map((category, catIndex) => (
            <div
              key={category.title}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease-out ${catIndex * 0.15}s`,
                // Opsional: Tambahkan background sedikit pada kartu kategori jika ingin kontras lebih
                // backgroundColor: "rgba(26, 15, 10, 0.3)",
                // padding: "2rem",
                // borderRadius: "8px",
                // backdropFilter: "blur(4px)",
              }}
            >
              {/* Category Title */}
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(24px, 4vw, 36px)",
                    fontWeight: 400,
                    color: "#C9A96E",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(13px, 2vw, 15px)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "rgba(250,247,242,0.5)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {category.subtitle}
                  </p>
                )}
                <div
                  style={{
                    width: "40px",
                    height: "0.5px",
                    background: "rgba(201,169,110,0.4)",
                    margin: "1rem auto 0",
                  }}
                />
              </div>

              {/* Menu Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                }}
              >
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1.5rem",
                      paddingBottom: "1.75rem",
                      borderBottom:
                        itemIndex < category.items.length - 1
                          ? "0.5px solid rgba(201,169,110,0.15)"
                          : "none",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "clamp(13px, 2vw, 15px)",
                          fontWeight: 500,
                          color: "#FAF7F2",
                          letterSpacing: "0.05em",
                          marginBottom: "0.5rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(13px, 1.8vw, 15px)",
                          fontWeight: 300,
                          color: "rgba(250,247,242,0.55)",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div
                      style={{
                        flexShrink: 0,
                        textAlign: "right",
                        paddingTop: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "clamp(12px, 1.8vw, 14px)",
                          fontWeight: 400,
                          color: "#C9A96E",
                          letterSpacing: "0.05em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "0.5px solid rgba(201,169,110,0.15)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease-out 0.8s",
          }}
        ></div>
      </div>
    </section>
  );
}
