import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, phone, date, time, guests } = await request.json();

    if (!name || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { success: false, message: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }

    const requestedGuests = parseInt(guests);

    // 1. Ambil Kapasitas Maksimum dari Database
    const settingResult = await sql`
      SELECT value FROM settings WHERE key = 'max_capacity_per_slot'
    `;
    const MAX_CAPACITY = settingResult.length > 0 ? settingResult[0].value : 50;

    // 2. Double Check Ketersediaan (Race Condition Protection)
    const checkResult = await sql`
      SELECT COALESCE(SUM(guests), 0) as total_guests 
      FROM reservations 
      WHERE reservation_date = ${date} 
      AND reservation_time = ${time}
      AND status != 'cancelled'
    `;

    const currentTotalGuests = Number(checkResult[0].total_guests);

    if (currentTotalGuests + requestedGuests > MAX_CAPACITY) {
      return NextResponse.json({
        success: false,
        message: 'Maaf, kapasitas baru saja terpenuhi oleh tamu lain.'
      }, { status: 409 });
    }

    // 3. Insert ke Database
    await sql`
      INSERT INTO reservations (name, phone, reservation_date, reservation_time, guests)
      VALUES (${name}, ${phone}, ${date}, ${time}, ${requestedGuests})
    `;

    return NextResponse.json({
      success: true,
      message: 'Reservasi berhasil disimpan'
    });

  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal menyimpan reservasi' },
      { status: 500 }
    );
  }
}