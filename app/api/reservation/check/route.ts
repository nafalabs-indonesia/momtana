import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { date, time, guests } = await request.json();

    if (!date || !time || !guests) {
      return NextResponse.json(
        { available: false, message: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    // 1. Ambil Kapasitas Maksimum dari Database
    const settingResult = await sql`
      SELECT value FROM settings WHERE key = 'max_capacity_per_slot'
    `;
    
    // Jika setting belum ada, pakai default 50
    const MAX_CAPACITY = settingResult.length > 0 ? settingResult[0].value : 50;

    // 2. Hitung total tamu yang sudah booking di jam tersebut
    const result = await sql`
      SELECT COALESCE(SUM(guests), 0) as total_guests 
      FROM reservations 
      WHERE reservation_date = ${date} 
      AND reservation_time = ${time}
      AND status != 'cancelled'
    `;

    const currentTotalGuests = Number(result[0].total_guests);
    const requestedGuests = parseInt(guests);

    // 3. Cek apakah masih muat
    if (currentTotalGuests + requestedGuests > MAX_CAPACITY) {
      const remaining = MAX_CAPACITY - currentTotalGuests;
      return NextResponse.json({
        available: false,
        message: `Maaf, kapasitas penuh. Kapasitas kursi tersedia: ${remaining > 0 ? remaining : 0}. Silakan pilih waktu lain.`
      });
    }

    return NextResponse.json({
      available: true,
      message: 'Meja tersedia'
    });

  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { available: false, message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}