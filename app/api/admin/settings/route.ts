import { NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function GET() {
  try {
    const data = await sql`SELECT * FROM settings WHERE key = 'max_capacity_per_slot'`;
    // Return object value saja agar mudah di frontend
    return NextResponse.json(data[0] || { value: 50 });
  } catch (error) {
    return NextResponse.json({ value: 50 });
  }
}

export async function PUT(request: Request) {
  const { value } = await request.json();
  
  try {
    await sql`
      INSERT INTO settings (key, value) VALUES ('max_capacity_per_slot', ${value})
      ON CONFLICT (key) DO UPDATE SET value = ${value}
    `;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed update' }, { status: 500 });
  }
}