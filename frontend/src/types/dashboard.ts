// ============================================================
// FILE: src/types/dashboard.ts
// DESKRIPSI: Semua interface/tipe TypeScript untuk fitur Dashboard.
//
// CATATAN UNTUK TIM BACKEND & AI ENGINEER:
//   - Interface di file ini adalah "kontrak data" antara frontend dan backend.
//   - Pastikan response JSON dari API kalian cocok dengan struktur di bawah ini.
//   - Khususnya `AIResponseData` — ini adalah output yang diharapkan dari model AI
//     setelah menganalisis CV user.
// ============================================================

// ─── Sesi User (disimpan di sessionStorage) ─────────────────
// Dibuat saat user berhasil login/register.
// Dihapus otomatis saat tab browser ditutup (karena sessionStorage).
export interface UserSession {
  id?: number;           // ID user dari database (isi jika backend sudah tersedia)
  name: string;          // Nama lengkap user
  email: string;         // Email user
  cvFileName?: string;   // Nama file CV terakhir yang diunggah
  cvUploadedAt?: string; // Tanggal upload CV (format: ISO string)
  role?: string;         // Role user, default: 'user'
}

// ─── Output AI: Data Satu Rekomendasi Lowongan ──────────────
// CATATAN AI ENGINEER: Ini adalah struktur satu item di dalam array `top_loker`.
// Field `lokasi`, `gaji`, `tipe_kerja`, `url` adalah opsional — tambahkan
// jika model atau backend kalian sudah bisa menyediakannya.
export interface JobRecommendation {
  posisi: string;          // Nama posisi pekerjaan
  perusahaan: string;      // Nama perusahaan
  industri: string;        // Bidang industri
  skor_match: number;      // Persentase kecocokan dengan CV (0-100)
  saran_belajar: string[]; // List skill yang perlu dipelajari untuk posisi ini
  lokasi?: string;         // Lokasi kerja (opsional, misal: "Jakarta (Hybrid)")
  gaji?: string;           // Kisaran gaji (opsional, misal: "Rp 8jt - 12jt")
  tipe_kerja?: string;     // Tipe kerja (opsional: "Full-time" | "Part-time" | "Remote")
  url?: string;            // Link lowongan asli (opsional)
}

// ─── Output AI: Response Lengkap Analisis CV ────────────────
// CATATAN AI ENGINEER: Ini adalah struktur JSON utama yang diharapkan diterima
// dari endpoint API kalian (misal: POST /api/cv/analyze).
// Frontend akan menggunakan response ini untuk menampilkan semua data di dashboard.
export interface AIResponseData {
  status: string;                     // "success" atau "error"
  data_pelamar: {
    skill_terdeteksi: string[];        // Semua skill yang diekstrak dari CV user
  };
  rekomendasi_utama_bidang: string;   // Bidang karier utama yang direkomendasikan
  top_loker: JobRecommendation[];     // Daftar semua lowongan yang direkomendasikan
}

// ─── Tren Pasar Kerja ────────────────────────────────────────
// CATATAN DATA SCIENTIST: Data ini idealnya diambil dari endpoint tren pasar kerja.
// Saat ini menggunakan mock data di `src/utils/mockData.ts`.
export interface MarketTrend {
  skill: string;           // Nama keterampilan
  persentase: number;      // Tingkat permintaan (0-100)
  tren: 'naik' | 'turun' | 'stabil'; // Arah tren permintaan
}

// ─── Sumber Belajar / Rekomendasi Kursus ─────────────────────
// CATATAN BACKEND: Data ini berasal dari tabel `learn_resources` di database.
// Cocokkan field ini dengan kolom tabel yang ada di schema.sql.
export interface LearnResource {
  id: number;
  judul: string;           // Nama kursus / materi belajar
  platform: string;        // Platform penyedia (misal: "Dicoding", "Coursera")
  skill_target: string;    // Skill yang akan dipelajari
  durasi?: string;         // Estimasi durasi (misal: "8 jam")
  rating?: number;         // Rating kursus (0-5)
  url?: string;            // Link ke kursus
}

// ─── Lowongan yang Disimpan User ─────────────────────────────
// Disimpan di localStorage agar persisten meski tab browser ditutup.
export interface SavedJob extends JobRecommendation {
  savedAt: string;         // Tanggal disimpan (ISO string)
}
