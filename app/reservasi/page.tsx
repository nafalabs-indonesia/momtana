"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const [status, setStatus] = useState<"idle" | "checking" | "available" | "full" | "submitting" | "success">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if (['date', 'time', 'guests'].includes(e.target.name)) {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  // 1. FUNGSI CEK KETERSEDIAAN (CONNECT TO API)
  const checkAvailability = async () => {
    if (!formData.date || !formData.time || !formData.guests) {
      setErrorMsg("Mohon lengkapi Tanggal, Jam, dan Jumlah Tamu.");
      return;
    }

    setStatus("checking");
    setErrorMsg("");

    try {
      const response = await fetch("/api/reservation/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: formData.date,
          time: formData.time,
          guests: parseInt(formData.guests),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal mengecek ketersediaan");
      }

      if (data.available) {
        setStatus("available");
      } else {
        setStatus("full");
        setErrorMsg(data.message || "Maaf, meja penuh pada waktu tersebut.");
      }

    } catch (error: any) {
      console.error(error);
      setStatus("idle");
      setErrorMsg(error.message || "Terjadi kesalahan koneksi server.");
    }
  };

  // 2. FUNGSI SUBMIT RESERVASI (CONNECT TO API)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus("submitting");

    try {
      const response = await fetch("/api/reservation/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          guests: parseInt(formData.guests),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal menyimpan reservasi");
      }

      setStatus("success");

    } catch (error: any) {
      console.error(error);
      setStatus("available"); // Kembali ke available agar user bisa coba lagi atau ubah jam
      setErrorMsg(error.message || "Gagal melakukan reservasi. Silakan coba lagi.");
    }
  };

  // Generate opsi waktu (10:00 - 22:00)
  const timeSlots = [];
  for (let i = 10; i <= 22; i++) {
    timeSlots.push(`${i}:00`);
    if (i !== 22) timeSlots.push(`${i}:30`);
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#3A2318] font-montserrat relative overflow-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
         <div className="absolute top-0 right-0 w-125 h-125 bg-[#C9A96E] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="relative z-50"><Header /></div>

      <div className={`relative z-10 container mx-auto px-6 py-24 md:py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <p className="text-[#C9A96E] text-[12px] tracking-[0.3em] uppercase font-bold mb-3">
              Reservasi Online
            </p>
            <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light italic text-[#3A2318] mb-4">
              Pastikan Tempat Anda
            </h1>
            <p className="text-[#3A2318]/70 font-light max-w-lg mx-auto leading-relaxed">
              Isi formulir di bawah ini untuk mengecek ketersediaan meja dan melakukan reservasi.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-[#C9A96E]/20 p-8 md:p-12 shadow-xl rounded-sm">
            
            {status === "success" ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#C9A96E]" />
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#3A2318] mb-4">
                  Reservasi Berhasil!
                </h2>
                <p className="text-[#3A2318]/70 mb-8">
                  Terima kasih, <span className="font-semibold">{formData.name}</span>.<br/>
                  Kami menunggu kedatangan Anda pada {formData.date} pukul {formData.time}.
                </p>
                <button 
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
                  }}
                  className="text-[#C9A96E] text-sm uppercase tracking-widest hover:text-[#3A2318] transition-colors border-b border-[#C9A96E] pb-1"
                >
                  Buat Reservasi Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#3A2318]/60 font-bold">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-[#C9A96E]/40 py-3 px-2 text-[#3A2318] placeholder:text-[#3A2318]/30 focus:outline-none focus:border-[#C9A96E] transition-colors font-['Cormorant_Garamond'] text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#3A2318]/60 font-bold">No. WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812..."
                      className="w-full bg-transparent border-b border-[#C9A96E]/40 py-3 px-2 text-[#3A2318] placeholder:text-[#3A2318]/30 focus:outline-none focus:border-[#C9A96E] transition-colors font-['Cormorant_Garamond'] text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#3A2318]/60 font-bold flex items-center gap-2">
                      <Calendar size={14} /> Tanggal
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C9A96E]/40 py-3 px-2 text-[#3A2318] focus:outline-none focus:border-[#C9A96E] transition-colors font-['Cormorant_Garamond'] text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#3A2318]/60 font-bold flex items-center gap-2">
                      <Clock size={14} /> Jam
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C9A96E]/40 py-3 px-2 text-[#3A2318] focus:outline-none focus:border-[#C9A96E] transition-colors font-['Cormorant_Garamond'] text-lg cursor-pointer"
                    >
                      <option value="">Pilih Jam</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#3A2318]/60 font-bold flex items-center gap-2">
                      <Users size={14} /> Tamu
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C9A96E]/40 py-3 px-2 text-[#3A2318] focus:outline-none focus:border-[#C9A96E] transition-colors font-['Cormorant_Garamond'] text-lg"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-[#C9A96E]/10">
                  
                  {status === "full" && errorMsg && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm flex items-start gap-3 rounded border border-red-100">
                      <AlertCircle className="shrink-0 mt-0.5" size={18} />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                  
                  {status === "available" && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm flex items-center gap-3 rounded border border-green-100">
                      <CheckCircle2 size={18} />
                      <span>Meja tersedia untuk {formData.guests} orang. Silakan konfirmasi.</span>
                    </div>
                  )}

                  <div className="pt-2">
                    {(status === "idle" || status === "checking" || status === "full") && (
                      <button
                        type="button"
                        onClick={checkAvailability}
                        disabled={status === "checking"}
                        className="w-full border border-[#3A2318] text-[#3A2318] py-4 px-8 hover:bg-[#3A2318] hover:text-[#FAF7F2] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-bold text-[10px] tracking-[0.25em] uppercase"
                      >
                        {status === "checking" ? (
                          <>Mengecek Ketersediaan... <Loader2 className="animate-spin w-4 h-4" /></>
                        ) : (
                          "Cek Ketersediaan Meja"
                        )}
                      </button>
                    )}

                    {(status === "available" || status === "submitting") && (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-[#3A2318] text-[#FAF7F2] py-4 px-8 hover:bg-[#C9A96E] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden flex items-center justify-center gap-2 font-bold text-[10px] tracking-[0.25em] uppercase"
                      >
                        {status === "submitting" ? (
                          <>Memproses... <Loader2 className="animate-spin w-4 h-4" /></>
                        ) : (
                          <>Konfirmasi Reservasi <CheckCircle2 className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>

                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      <div className="relative z-20"><Footer /></div>
    </main>
  );
}