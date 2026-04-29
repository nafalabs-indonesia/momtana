"use client";

import { useState, useEffect } from "react";
import { Trash2, Users, Calendar, Clock, Save, LogOut, AlertCircle, X, Check } from "lucide-react";

// Tipe Data
interface Reservation {
  id: number;
  name: string;
  phone: string;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  status: string;
  created_at: string;
}

type ModalType = "delete" | "capacity" | null;

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [capacity, setCapacity] = useState<number>(50);
  const [newCapacityInput, setNewCapacityInput] = useState<number>(50); // State sementara untuk input modal
  const [loading, setLoading] = useState(true);

  // State untuk Modal & Notifikasi
  const [modalOpen, setModalOpen] = useState<ModalType>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // 1. Cek Autentikasi Saat Load
  useEffect(() => {
    const auth = localStorage.getItem("momtana_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  // Helper: Tampilkan Notifikasi
  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000); // Hilang setelah 3 detik
  };

  // 2. Fungsi Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: passwordInput }),
    });

    if (res.ok) {
      localStorage.setItem("momtana_admin_auth", "true");
      setIsAuthenticated(true);
      fetchData();
    } else {
      setLoginError("Password salah!");
    }
  };

  // 3. Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const resReserv = await fetch("/api/admin/reservations");
      const dataReserv = await resReserv.json();
      setReservations(dataReserv);

      const resSetting = await fetch("/api/admin/settings");
      const dataSetting = await resSetting.json();
      setCapacity(dataSetting.value);
    } catch (err) {
      showNotification("Gagal memuat data", "error");
    } finally {
      setLoading(false);
    }
  };

  // 4. Aksi Konfirmasi Hapus
  const confirmDelete = (id: number) => {
    setSelectedId(id);
    setModalOpen("delete");
  };

  const executeDelete = async () => {
    if (!selectedId) return;
    
    try {
      const res = await fetch(`/api/admin/reservations?id=${selectedId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        showNotification("Reservasi berhasil dihapus", "success");
        fetchData();
      } else {
        showNotification("Gagal menghapus reservasi", "error");
      }
    } catch (error) {
      showNotification("Terjadi kesalahan server", "error");
    } finally {
      setModalOpen(null);
      setSelectedId(null);
    }
  };

  // 5. Aksi Konfirmasi Update Kapasitas
  const confirmUpdateCapacity = () => {
    setNewCapacityInput(capacity); // Reset input ke nilai saat ini
    setModalOpen("capacity");
  };

  const executeUpdateCapacity = async () => {
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: newCapacityInput }),
      });

      if (res.ok) {
        setCapacity(newCapacityInput); // Update state utama
        showNotification("Kapasitas berhasil diperbarui", "success");
      } else {
        showNotification("Gagal memperbarui kapasitas", "error");
      }
    } catch (error) {
      showNotification("Terjadi kesalahan server", "error");
    } finally {
      setModalOpen(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("momtana_admin_auth");
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  // --- TAMPILAN LOGIN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-[#C9A96E]/20">
          <h1 className="font-['Cormorant_Garamond'] text-3xl text-center mb-6 text-[#3A2318]">Admin Momtana</h1>
          {loginError && <p className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">{loginError}</p>}
          <input
            type="password"
            placeholder="Masukkan Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full border text-[#3A2318] border-gray-300 p-3 rounded mb-4 focus:outline-none focus:border-[#C9A96E]"
          />
          <button className="w-full bg-[#3A2318] text-white py-3 rounded hover:bg-[#C9A96E] transition-colors font-bold uppercase tracking-widest text-xs">
            Masuk
          </button>
        </form>
      </div>
    );
  }

  // --- TAMPILAN DASHBOARD ---
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3A2318] p-8 relative">
      
      {/* NOTIFIKASI TOAST */}
      {notification && (
        <div className={`fixed top-6 right-6 z-100 px-6 py-4 rounded shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-5 duration-300 ${
          notification.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {notification.type === "success" ? <Check size={20} /> : <AlertCircle size={20} />}
          <span className="font-medium text-sm">{notification.message}</span>
        </div>
      )}

      {/* MODAL KONFIRMASI */}
      {modalOpen && (
        <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className="bg-[#FAF7F2] p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-[#3A2318]">
                {modalOpen === "delete" ? "Konfirmasi Hapus" : "Ubah Kapasitas"}
              </h3>
              <button onClick={() => setModalOpen(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            {/* Body Modal */}
            <div className="p-6">
              {modalOpen === "delete" ? (
                <p className="text-gray-600 text-sm">
                  Apakah Anda yakin ingin menghapus data reservasi ini? Tindakan ini tidak dapat dibatalkan.
                </p>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">Masukkan jumlah maksimal tamu per sesi jam:</p>
                  <input
                    type="number"
                    value={newCapacityInput}
                    onChange={(e) => setNewCapacityInput(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-[#C9A96E] text-[#3A2318] font-bold"
                  />
                </div>
              )}
            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(null)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={modalOpen === "delete" ? executeDelete : executeUpdateCapacity}
                className={`px-4 py-2 text-sm font-bold text-white rounded shadow-sm transition-colors ${
                  modalOpen === "delete" 
                    ? "bg-red-600 hover:bg-red-700" 
                    : "bg-[#3A2318] hover:bg-[#C9A96E]"
                }`}
              >
                {modalOpen === "delete" ? "Ya, Hapus" : "Simpan Perubahan"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        
        {/* Header Dashboard */}
        <div className="flex justify-between items-center mb-8 border-b border-[#C9A96E]/30 pb-4">
          <h1 className="font-['Cormorant_Garamond'] text-4xl italic">Dashboard Reservasi</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-bold uppercase">
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Stats & Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card Total Reservasi */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A96E]/20">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-[#C9A96E]/10 rounded-full text-[#C9A96E]">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Total Reservasi</p>
                <h3 className="text-3xl font-bold">{reservations.length}</h3>
              </div>
            </div>
          </div>

          {/* Card Setting Kapasitas */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#C9A96E]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Kapasitas Per Sesi</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold text-[#3A2318]">{capacity}</span>
                    <span className="text-sm text-gray-500">Orang</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={confirmUpdateCapacity}
                className="bg-[#3A2318] text-white p-3 rounded hover:bg-[#C9A96E] transition-colors shadow-sm"
                title="Edit Kapasitas"
              >
                <Save size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="bg-white rounded-lg shadow-sm border border-[#C9A96E]/20 overflow-hidden">
          <div className="p-6 border-b border-[#C9A96E]/10 flex justify-between items-center">
            <h2 className="font-bold text-lg">Daftar Reservasi Masuk</h2>
            <button onClick={fetchData} className="text-sm text-[#C9A96E] hover:underline font-medium">Refresh Data</button>
          </div>
          
          {loading ? (
            <div className="p-12 text-center text-gray-500 flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-[#C9A96E] border-t-transparent rounded-full animate-spin"></div>
              <span>Memuat data...</span>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F2] text-xs uppercase tracking-wider text-gray-500">
                    <th className="p-4 font-semibold">Tanggal & Jam</th>
                    <th className="p-4 font-semibold">Nama Tamu</th>
                    <th className="p-4 font-semibold">No. HP</th>
                    <th className="p-4 font-semibold text-center">Jumlah</th>
                    <th className="p-4 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {reservations.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-12 text-center text-gray-400 italic">Belum ada data reservasi.</td>
                    </tr>
                  ) : (
                    reservations.map((res) => (
                      <tr key={res.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-center gap-2 font-medium text-[#3A2318]">
                            <Calendar size={14} className="text-[#C9A96E]" />
                            {new Date(res.reservation_date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short' })}
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 mt-1 ml-6">
                            <Clock size={14} />
                            {res.reservation_time}
                          </div>
                        </td>
                        <td className="p-4 font-medium text-[#3A2318]">{res.name}</td>
                        <td className="p-4 text-gray-600 font-mono text-xs">{res.phone}</td>
                        <td className="p-4 text-center">
                          <span className="bg-[#C9A96E]/10 text-[#C9A96E] px-3 py-1 rounded-full text-xs font-bold border border-[#C9A96E]/20">
                            {res.guests} Org
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => confirmDelete(res.id)}
                            className="text-gray-400 hover:text-red-600 p-2 rounded hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                            title="Hapus Reservasi"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}