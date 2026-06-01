# NextStep - Readme.md Dibantu AI Agent Buat nya
> **Platform analitik karier cerdas** — membantu pencari kerja memetakan relevansi CV mereka terhadap tren pasar kerja terkini.

**Coding Camp 2026 × DBS Foundation | Team CC26-PSU117 | Deadline: 8 Juni 2026**

---

## 📑 Daftar Isi

1. [Tentang Project](#1-tentang-project)
2. [Struktur Folder Lengkap](#2-struktur-folder-lengkap)
3. [Cara Menjalankan (Setup Lokal)](#3-cara-menjalankan-setup-lokal)
4. [Panduan untuk Tim Backend](#4-panduan-untuk-tim-backend-)
5. [Panduan untuk Tim AI Engineer](#5-panduan-untuk-tim-ai-engineer-)
6. [Panduan untuk Tim Data Scientist](#6-panduan-untuk-tim-data-scientist-)
7. [Kontrak Data API (Sangat Penting!)](#7-kontrak-data-api-sangat-penting)
8. [Checklist Integrasi](#8-checklist-integrasi)
9. [Anggota Tim](#9-anggota-tim)

---

## 1. Tentang Project

NextStep adalah **mesin analitik karier proaktif** — bukan portal lowongan biasa. User upload CV → sistem menganalisis skill → menampilkan:

- ✅ Rekomendasi bidang karier yang paling cocok
- ✅ Top lowongan kerja yang match dengan skill user
- ✅ Skill gap yang perlu dipelajari
- ✅ Tren pasar kerja saat ini

**Status saat ini:**
| Layer | Status | Keterangan |
|-------|--------|------------|
| Frontend UI | ✅ Selesai | Semua halaman: Login, Register, Lupa Password (OTP), Dashboard, Upload CV — pakai mock data |
| Backend API | 🔴 Perlu dibuat | Folder sudah ada, isi logic belum ada |
| AI/ML Model | 🔴 Perlu dibuat | Endpoint `/predict` perlu dibuat tim AI |
| Database | 🔴 Perlu dibuat | Schema belum dibuat |
| Integrasi | 🔴 Belum dimulai | Menunggu backend + AI siap |

---

## 2. Struktur Folder Lengkap

```
FullStack-NextStep/
│
├── 📄 README.md              ← File ini
├── 📄 netlify.toml           ← Konfigurasi deploy frontend ke Netlify
├── 📄 .gitignore             ← File yang diabaikan Git
│
├── 📁 backend/               ← SERVER Express.js (Node.js)
│   ├── 📄 index.js           ← Entry point server (sudah ada: helmet, cors, rate limiter)
│   ├── 📄 package.json       ← Daftar dependensi backend
│   ├── 📄 .env.example       ← Template konfigurasi environment (salin ke .env)
│   │
│   ├── 📁 controllers/       ← Logic bisnis per fitur [🔴 ISI INI]
│   │   └── controller.js     ← Placeholder kosong — ganti dengan authController.js, cvController.js, dll.
│   │
│   ├── 📁 models/            ← Schema database / ORM [🔴 ISI INI]
│   │   └── model.js          ← Placeholder kosong — ganti dengan userModel.js, cvModel.js, dll.
│   │
│   ├── 📁 routes/            ← Definisi endpoint API [🔴 ISI INI]
│   │   └── api.js            ← Placeholder kosong — ganti dengan authRoutes.js, cvRoutes.js, dll.
│   │
│   └── 📁 services/          ← Logika eksternal (panggil AI, email, dll.) [🔴 ISI INI]
│       └── service.js        ← Placeholder kosong — ganti dengan aiService.js, dll.
│
└── 📁 frontend/              ← APLIKASI React + Vite + TypeScript
    ├── 📄 index.html         ← HTML entry point (jangan diubah)
    ├── 📄 vite.config.ts     ← Konfigurasi Vite bundler
    ├── 📄 package.json       ← Daftar dependensi frontend
    ├── 📄 .env.example       ← Template konfigurasi environment frontend
    │
    └── 📁 src/               ← Source code frontend
        │
        ├── 📄 main.tsx       ← Entry point React (mount ke #root di index.html)
        ├── 📄 index.css      ← Global styles + Tailwind v4 + animasi custom
        │
        ├── 📄 App.tsx        ← ROOT KOMPONEN
        │                       Berisi: routing, provider Language & Auth
        │                       Routes: / | /login | /register | /upload | /dashboard
        │
        ├── 📁 assets/        ← Gambar & media statis
        │   ├── home-main-page.webp   ← Hero image landing page (303KB, sudah dioptimasi)
        │   ├── home-main-page.png    ← ⚠️ HAPUS SEBELUM PRODUCTION (14MB, duplikat)
        │   ├── 📁 avatar/            ← 6 foto avatar profil (cute1.png - cute6.png)
        │   └── 📁 login/             ← Gambar background halaman login/register
        │
        ├── 📁 context/       ← State Global (React Context)
        │   ├── AuthContext.tsx      ← Status login user (isLoggedIn, user, login(), logout())
        │   │                          ⚠️ SAAT INI MOCK — ganti dengan API call saat backend siap
        │   └── LanguageContext.tsx  ← Toggle bahasa Indonesia/English (t(), language, toggleLanguage())
        │
        ├── 📁 hooks/         ← Custom React Hooks
        │   └── useAuth.ts    ← Hook `useRequireAuth()` — redirect ke /login jika belum login
        │
        ├── 📁 types/         ← Definisi Tipe Data TypeScript
        │   └── dashboard.ts  ← ⭐ INTERFACE PENTING — kontrak data antara frontend & backend/AI
        │                        Berisi: UserSession, AIResponseData, JobRecommendation,
        │                                MarketTrend, LearnResource, SavedJob
        │
        ├── 📁 utils/         ← Fungsi Helper & Data Sementara
        │   └── mockData.ts   ← ⭐ DATA MOCK — semua data dummy yang perlu diganti dengan API
        │                        Berisi: MOCK_AI_RESPONSE, MOCK_MARKET_TRENDS,
        │                                MOCK_LEARN_RESOURCES, STORAGE_KEYS
        │
        ├── 📁 services/      ← [KOSONG] Akan diisi dengan fungsi Axios ke backend
        │                        Rencana: authService.ts, cvService.ts, jobService.ts
        │
        ├── 📁 store/         ← [KOSONG] Akan diisi dengan state management (Zustand/Redux)
        │
        ├── 📁 routes/        ← [KOSONG] Router config sudah di App.tsx
        │
        ├── 📁 pages/         ← Halaman-halaman Aplikasi
        │   ├── SplashPage.tsx       ← Animasi intro saat pertama buka (spiral + teks NextStep)
        │   ├── HomePage.tsx         ← Landing page utama (Hero + Features + Footer)
        │   ├── 📁 auth/
        │   │   ├── AuthPage.tsx     ← ⭐ Auth hub TERPUSAT (Login + Register + Lupa Password dalam 1 file)
        │   │   │                       Routes: /login | /register | /forgot-password
        │   │   │                       Fitur: vertical slide animation, OTP 6-digit, password strength meter
        │   │   │                       Bilingual: ID/EN toggle
        │   │   ├── LoginPage.tsx    ← (Legacy — tidak dipakai routing utama, bisa dihapus)
        │   │   └── RegisterPage.tsx ← (Legacy — tidak dipakai routing utama, bisa dihapus)
        │   ├── 📁 cv/
        │   │   └── UploadPage.tsx   ← ⭐ Halaman upload CV + tampilkan hasil analisis AI
        │   │                           SAAT INI: pakai mock data
        │   │                           NANTI: kirim file ke POST /api/cv/upload → tampilkan hasil
        │   └── 📁 dashboard/
        │       └── DashboardPage.tsx ← ⭐ Dashboard utama post-login
        │                               Tab: Overview | Jobs | Saved | Skill-Up | Trends | Profile
        │                               SAAT INI: semua data dari mockData.ts
        │                               NANTI: fetch dari API endpoint masing-masing
        │
        └── 📁 components/    ← Komponen UI yang Reusable
            ├── 📁 auth/
            │   ├── LoginForm.tsx         ← Form login (email + password, eye toggle)
            │   └── RegisterForm.tsx      ← Form register (nama, email, password, konfirmasi)
            │
            ├── 📁 common/
            │   ├── ShapeGrid.tsx         ← Background animasi grid canvas (halaman upload)
            │   └── ScrollToTop.tsx       ← Tombol scroll ke atas (floating button)
            │
            ├── 📁 dashboard/
            │   ├── DashboardSidebar.tsx  ← Sidebar kiri (desktop) + bottom nav (mobile)
            │   │                           Berisi: UserAvatar, nav menu, logout
            │   ├── WelcomePanel.tsx      ← Panel sambutan + skor match gauge besar
            │   ├── MatchScoreGauge.tsx   ← Grafik gauge persentase kecocokan CV
            │   ├── SkillCloud.tsx        ← Visualisasi skill cloud dari hasil analisis AI
            │   ├── JobCard.tsx           ← Kartu satu lowongan (skor match, saran belajar, simpan)
            │   ├── MarketTrendWidget.tsx ← Widget tren pasar kerja (bar chart)
            │   └── LearnCard.tsx         ← Kartu rekomendasi kursus/belajar
            │
            ├── 📁 home/
            │   ├── HeroSection.tsx       ← Bagian hero landing page
            │   └── FeaturesSection.tsx   ← Grid fitur-fitur NextStep
            │
            ├── 📁 layout/
            │   ├── Navbar.tsx            ← Navigasi atas (sticky, auth-aware, mobile drawer)
            │   └── Footer.tsx            ← Footer sederhana
            │
            └── 📁 ui/
                ├── SpiralAnimation.tsx   ← Animasi spiral canvas (background SplashPage)
                ├── PixelBlast.tsx        ← Animasi pixel ripple canvas (background HeroSection)
                └── PixelBlast.css        ← CSS untuk PixelBlast
```

---

## 3. Cara Menjalankan (Setup Lokal)

### Prasyarat
- Node.js ≥ 18
- npm ≥ 9
- Git

### Frontend
```bash
# 1. Clone repo
git clone https://github.com/nextstepv1/FullStack-NextStep.git
cd FullStack-NextStep

# 2. Masuk ke folder frontend
cd frontend

# 3. Install dependensi
npm install

# 4. Buat file .env (salin dari template)
cp .env.example .env
# Edit .env → isi VITE_API_BASE_URL=http://localhost:3000

# 5. Jalankan development server
npm run dev
# Buka: http://localhost:5173
```

### Backend
```bash
# Dari root folder
cd backend

# Install dependensi yang sudah ada
npm install

# Install dependensi yang PERLU ditambahkan tim backend:
npm install bcryptjs jsonwebtoken multer express-validator mongoose
# (atau 'pg' jika pakai PostgreSQL, bukan MongoDB)

# Buat file .env
cp .env.example .env
# Edit .env → isi semua variable (PORT, DATABASE_URL, JWT_SECRET, AI_SERVICE_URL)

# Jalankan server (development)
npm run dev
# Server berjalan di: http://localhost:3000
# Health check: http://localhost:3000/health
```

### Build Frontend untuk Production
```bash
cd frontend
npm run build
# Hasil build ada di folder: frontend/dist/
# Upload folder dist/ ke Netlify (drag & drop)
```

---

## 4. Panduan untuk Tim Backend 🖥️

### Yang Sudah Ada (Jangan Dihapus)
File `backend/index.js` sudah berisi:
- ✅ Express server di port 3000
- ✅ Helmet (security headers)
- ✅ CORS (whitelist localhost:5173 dan 5174)
- ✅ Rate limiter (100 req / 15 menit per IP)
- ✅ Health check endpoint: `GET /health`

### Yang Harus Dibuat

#### Step 1 — Buat folder `middleware/`
```
backend/middleware/
├── authMiddleware.js    ← Verifikasi JWT dari header Authorization
└── uploadMiddleware.js  ← Konfigurasi Multer untuk file CV
```

#### Step 2 — Endpoint Auth (Prioritas Utama)
```
POST  /api/auth/register          → Daftar akun baru
POST  /api/auth/login             → Login, return JWT token
POST  /api/auth/logout            → Invalidate token
GET   /api/auth/me                → Profil user saat ini (butuh JWT)

--- Lupa Password (OTP via Email) ---
POST  /api/auth/forgot-password   → Kirim OTP 6-digit ke email terdaftar
POST  /api/auth/verify-otp        → Verifikasi kode OTP, return reset_token
POST  /api/auth/reset-password    → Set password baru pakai reset_token
```

> **Catatan Lupa Password**: Frontend sudah siap memanggil 3 endpoint ini secara berurutan.
> Cari komentar `TODO (Backend)` di `frontend/src/pages/auth/AuthPage.tsx` untuk melihat
> persis di mana dan dengan payload apa setiap endpoint dipanggil.

#### Step 3 — Endpoint CV
```
POST  /api/cv/upload       → Upload file CV (multipart, max 10MB, PDF/DOCX saja)
                             → Ekstrak teks → kirim ke AI service → kembalikan hasil
GET   /api/cv/result/:id   → Ambil hasil analisis berdasarkan ID
GET   /api/cv/history      → Riwayat CV yang pernah dianalisis user
```

#### Step 4 — Endpoint Data Dashboard
```
GET   /api/market/trends          → Data tren pasar kerja (dari DS pipeline)
GET   /api/learn-resources        → Rekomendasi kursus
GET   /api/jobs/recommendations   → Rekomendasi lowongan dari AI (by user)
```

### Format Response API — WAJIB Diikuti
```json
{
  "success": true,
  "data": { ... },
  "message": "Deskripsi singkat"
}
```

Error response:
```json
{
  "success": false,
  "error": "Pesan error yang informatif"
}
```

### Cara Backend Memanggil AI Service
```javascript
// Di backend/services/aiService.js
import axios from 'axios';

export const analyzeCV = async (cvText) => {
  const response = await axios.post(`${process.env.AI_SERVICE_URL}/predict`, {
    cv_text: cvText
  });
  return response.data; // Harus sesuai format AIResponseData di types/dashboard.ts
};
```

---

## 5. Panduan untuk Tim AI Engineer 🤖

### Format Output Model — WAJIB Persis Seperti Ini
Frontend sudah dikonfigurasi untuk membaca response dengan format berikut:

```typescript
// Lihat file: frontend/src/types/dashboard.ts

interface AIResponseData {
  status: "success" | "error";
  data_pelamar: {
    skill_terdeteksi: string[];    // Contoh: ["JavaScript", "Python", "SQL"]
  };
  rekomendasi_utama_bidang: string; // Contoh: "Frontend Development"
  top_loker: Array<{
    posisi: string;                // Contoh: "Frontend Developer"
    perusahaan: string;            // Contoh: "PT. Gojek Indonesia"
    industri: string;              // Contoh: "Technology"
    skor_match: number;            // 0–100 (desimal OK, contoh: 96.4)
    saran_belajar: string[];       // Contoh: ["TypeScript", "Docker"]
    lokasi?: string;               // Opsional: "Jakarta (Hybrid)"
    gaji?: string;                 // Opsional: "Rp 10jt - 15jt"
    tipe_kerja?: string;           // Opsional: "Full-time" | "Remote"
    url?: string;                  // Opsional: link lowongan asli
  }>;
}
```

> ⚠️ **Field names harus sama persis** (huruf kecil, snake_case). Jika berbeda, frontend tidak akan menampilkan data.

### Endpoint yang Harus Dibuat
```
POST  http://localhost:8000/predict
Body: { "cv_text": "teks CV yang sudah diekstrak dari PDF/DOCX" }
Response: AIResponseData JSON di atas
```

### Mock Data Referensi
Lihat file `frontend/src/utils/mockData.ts` — ini adalah contoh persis data yang sudah ditampilkan di dashboard. AI Engineer harus menghasilkan output dengan struktur yang sama.

### Alur Integrasi
```
User upload CV (frontend)
    ↓
Backend terima file → ekstrak teks (pdf-parse / docx2txt)
    ↓
Backend kirim teks ke: POST http://localhost:8000/predict
    ↓
AI service proses → return AIResponseData JSON
    ↓
Backend simpan ke database → return ke frontend
    ↓
Frontend tampilkan di dashboard
```

---

## 6. Panduan untuk Tim Data Scientist 📊

### Dataset yang Dibutuhkan
Tim DS perlu menyiapkan dataset lowongan kerja yang akan dipakai model AI untuk matching. Format yang diharapkan:

```csv
posisi,perusahaan,industri,lokasi,skills_required,gaji_min,gaji_max,tipe_kerja,url
"Frontend Developer","PT. Gojek","Technology","Jakarta","JavaScript,React,TypeScript",10000000,15000000,"Full-time","https://..."
```

### Field Penting untuk Model Matching
| Field | Tipe | Keterangan |
|-------|------|------------|
| `posisi` | string | Nama jabatan |
| `industri` | string | Sektor industri |
| `skills_required` | list[string] | Skills yang dibutuhkan (koma-separated) |
| `skor_popularitas` | number | Seberapa banyak lowongan ini muncul (0-100) |

### Data Tren Pasar
Frontend juga mengonsumsi data tren pasar. Format yang diharapkan dari endpoint `GET /api/market/trends`:

```json
[
  { "skill": "TypeScript", "persentase": 94, "tren": "naik" },
  { "skill": "React", "persentase": 91, "tren": "naik" },
  { "skill": "jQuery", "persentase": 28, "tren": "turun" }
]
```

`tren` hanya boleh bernilai: `"naik"` | `"turun"` | `"stabil"`

### Sumber Scraping Data
- JobStreet Indonesia (https://www.jobstreet.co.id)
- Glints.com (https://glints.com/id)
- Loker.id (https://loker.id)
- LinkedIn Jobs (public)

---

## 7. Kontrak Data API (Sangat Penting!)

> Ini adalah "perjanjian" format data antara Frontend ↔ Backend ↔ AI.
> Semua tim **HARUS mengikuti format ini**. Jangan ubah nama field tanpa koordinasi.

### Auth — Login
**Request:**
```json
POST /api/auth/login
{ "email": "user@email.com", "password": "password123" }
```

**Response Login:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGci...",
    "user": {
      "id": 1,
      "name": "Nama User",
      "email": "user@email.com",
      "role": "user"
    }
  }
}
```

### Auth — Lupa Password (OTP Flow)

> Frontend memanggil 3 endpoint ini secara berurutan pada halaman `/forgot-password`.

**Step 1 — Kirim OTP:**
```json
POST /api/auth/forgot-password
{ "email": "user@email.com" }

Response:
{ "success": true, "message": "OTP dikirim ke email Anda." }
```

**Step 2 — Verifikasi OTP:**
```json
POST /api/auth/verify-otp
{ "email": "user@email.com", "otp": "123456" }

Response:
{ "success": true, "data": { "reset_token": "<short-lived JWT atau UUID>" } }
```

**Step 3 — Reset Password:**
```json
POST /api/auth/reset-password
{ "reset_token": "<dari step 2>", "new_password": "newPassword123" }

Response:
{ "success": true, "message": "Password berhasil diubah." }
```

> **Catatan OTP**:
> - OTP harus 6 digit numerik
> - OTP berlaku **5 menit** (setelah itu expired)
> - `reset_token` dari Step 2 berlaku **15 menit** (single-use)
> - Backend harus verifikasi email terdaftar di Step 1 (jika tidak ada, tetap return success untuk keamanan)

### Upload CV
**Request:**
```
POST /api/cv/upload
Content-Type: multipart/form-data
Body: { file: <CV file PDF/DOCX, max 10MB> }
Authorization: Bearer <JWT token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "cv_123",
    "result": {
      "status": "success",
      "data_pelamar": { "skill_terdeteksi": ["JavaScript", "Python"] },
      "rekomendasi_utama_bidang": "Frontend Development",
      "top_loker": [ "...daftar lowongan..." ]
    }
  }
}
```

---

## 8. Checklist Integrasi

### Untuk Tim Backend
- [ ] Install: `bcryptjs jsonwebtoken multer express-validator nodemailer`
- [ ] Buat `backend/.env` (salin dari `.env.example`)
- [ ] Setup database (PostgreSQL / MongoDB)
- [ ] Buat `middleware/authMiddleware.js`
- [ ] Buat routes: `authRoutes.js`, `cvRoutes.js`
- [ ] Buat controllers: `authController.js`, `cvController.js`
- [ ] Implementasi OTP forgot password:
  - `POST /api/auth/forgot-password` → generate OTP 6 digit, kirim via `nodemailer`
  - `POST /api/auth/verify-otp` → verifikasi OTP, return `reset_token`
  - `POST /api/auth/reset-password` → hash password baru, simpan ke DB
- [ ] Test semua endpoint dengan Postman
- [ ] Update CORS di `index.js` dengan domain production

### Untuk Tim AI Engineer
- [ ] Buat model NLP untuk ekstraksi skill dari CV
- [ ] Buat matching algorithm (CV skills vs dataset)
- [ ] Wrap model dalam FastAPI/Flask
- [ ] Test endpoint `POST /predict` dengan sample CV
- [ ] Pastikan output mengikuti format `AIResponseData`
- [ ] Share URL service ke tim backend

### Untuk Tim Data Scientist
- [ ] Scraping dataset lowongan dari minimal 2 sumber
- [ ] Cleaning dan EDA dataset
- [ ] Ekstraksi keyword skills yang paling banyak dicari
- [ ] Export CSV bersih → kirim ke AI Engineer
- [ ] Buat dashboard Streamlit untuk insight dataset

### Untuk Tim Frontend (saat backend sudah siap)
- [ ] Buat `frontend/.env` → isi `VITE_API_BASE_URL`
- [ ] Isi `frontend/src/services/authService.ts` (Axios call)
- [ ] Update `AuthContext.tsx` — ganti mock dengan API call
- [ ] Update `UploadPage.tsx` — ganti mock dengan API call
- [ ] Test end-to-end: Upload CV → Hasil tampil di dashboard

---

## 9. Anggota Tim

| ID | Nama | Peran |
|----|------|-------|
| CACC189D6Y0797 | Agyl Wendi Pratama | AI Engineer |
| CACC195D6Y1214 | Fernando | AI Engineer |
| CDCC189D6Y0825 | I Nyoman Dimas Kresna Adryan | Data Scientist |
| CDCC498D6Y2757 | Dimas Rifqy Aulia Husaen | Data Scientist |
| CFCC189D6Y1407 | Yohanes Adi Prasetya | Full-Stack Web Developer |
| CFCC846D6Y1301 | Mohammad Dimas Al Fateh | Full-Stack Web Developer |

---

## 📚 Dokumentasi Tambahan

- **`frontend/src/types/dashboard.ts`** — Semua interface TypeScript (kontrak data)
- **`frontend/src/utils/mockData.ts`** — Mock data + komentar TODO untuk titik integrasi
- **`backend/.env.example`** — Template environment variable backend

---

*NextStep © 2026 | Coding Camp × DBS Foundation | CC26-PSU117*
