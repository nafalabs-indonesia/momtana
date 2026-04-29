import { neon } from '@neondatabase/serverless';

// Ambil URL koneksi dari environment variable
const sql = neon(process.env.DATABASE_URL!);

export default sql;