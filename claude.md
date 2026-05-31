# NextStep — Project Guide for AI Assistants (CLAUDE.md)
> **Last updated: 2026-05-31** — Actual state after frontend implementation sprint.
> Keep this file updated every major sprint. Semua anggota tim wajib baca ini sebelum mulai coding.

---

## 1. Project Overview

| Key | Value |
|---|---|
| **Name** | NextStep |
| **Type** | Full-Stack Web Application (Capstone — Coding Camp 2026 × DBS Foundation) |
| **Team ID** | CC26-PSU117 |
| **Theme** | Future-ready Work & Economy |
| **Tagline** | "Jalur cerdas menuju karier masa depan Anda" |
| **Deadline** | 8 Juni 2026 (Presentasi & Peer Review) |

### Problem Statement
Ketidakmampuan pencari kerja dalam memetakan relevansi CV terhadap tren pasar menyebabkan tingginya pengangguran terdidik. NextStep hadir sebagai mesin analitik karier proaktif — bukan portal lowongan konvensional.

---

## 2. Team & Roles

| ID | Nama | Peran |
|---|---|---|
| CACC189D6Y0797 | Agyl Wendi Pratama | AI Engineer |
| CACC195D6Y1214 | Fernando | AI Engineer |
| CDCC189D6Y0825 | I Nyoman Dimas Kresna Adryan | Data Scientist |
| CDCC498D6Y2757 | Dimas Rifqy Aulia Husaen | Data Scientist |
| CFCC189D6Y1407 | Yohanes Adi Prasetya | Full-Stack Web Developer |
| CFCC846D6Y1301 | Mohammad Dimas Al Fateh | Full-Stack Web Developer |

---

## 3. Tech Stack

### Frontend (React + Vite + TypeScript)
| Technology | Version | Status |
|---|---|---|
| React | ^19.1.1 | ✅ Installed |
| TypeScript | ~5.9.3 | ✅ Installed |
| Vite | ^7.1.7 | ✅ Installed |
| Tailwind CSS v4 | ^4.3.0 | ✅ Installed |
| React Router DOM | ^7.x | ✅ Installed & configured |
| GSAP | ^3.15.0 | ✅ Installed |

### Backend (Express.js)
| Technology | Version | Status |
|---|---|---|
| Node.js | ≥18 | ✅ Required |
| Express | ^5.2.1 | ✅ Installed |
| cors | ^2.8.6 | ✅ Installed |
| helmet | ^8.1.0 | ✅ Installed |
| express-rate-limit | ^8.5.2 | ✅ Installed |
| dotenv | ^17.2.3 | ✅ Installed |
| nodemon | ^3.1.11 | ✅ Installed |
| **bcryptjs** | — | 🔴 TODO: Install — password hashing |
| **jsonwebtoken** | — | 🔴 TODO: Install — JWT auth |
| **multer** | — | 🔴 TODO: Install — CV file upload |
| **mongoose / pg** | — | 🔴 TODO: Install — database ORM |

### AI/ML Stack (Python — server terpisah, diekspos via REST)
| Technology | Purpose |
|---|---|
| Python ≥3.10 | Bahasa utama |
| TensorFlow & Keras | NLP model (Functional API / Model Subclassing) |
| Scikit-Learn | Evaluasi & baseline model |
| Pandas & NumPy | Data wrangling |
| FastAPI atau Flask | REST API endpoint untuk model |
| Streamlit | Dashboard eksplorasi dataset |

### Database
- **Rencana**: PostgreSQL atau MongoDB (belum diimplementasi)
- Folder `backend/models/` siap untuk schema

---

## 4. Actual Project Structure (State: 31 Mei 2026)

```
FullStack-NextStep/
├── claude.md                        ← Panduan AI context (file ini)
├── .gitignore
├── README.md
│
├── backend/                         ← Express.js server
│   ├── index.js                     ← ✅ Entry point (Express + helmet + cors + rateLimit)
│   ├── package.json
│   ├── controllers/
│   │   └── controller.js            ← ⚠️ Placeholder kosong — belum diisi
│   ├── models/
│   │   └── model.js                 ← ⚠️ Placeholder kosong — belum diisi
│   ├── routes/
│   │   └── api.js                   ← ⚠️ Placeholder kosong — belum diisi
│   └── services/
│       └── service.js               ← ⚠️ Placeholder kosong — belum diisi
│
└── frontend/                        ← React + Vite + TypeScript
    ├── index.html
    ├── vite.config.ts
    ├── tailwind.config.ts
    └── src/
        ├── App.tsx                  ← ✅ Root: SplashPage → RouterProvider
        ├── main.tsx                 ← ✅ React DOM entry
        ├── index.css                ← ✅ Global styles + Tailwind v4 + animations
        │
        ├── assets/
        │   ├── home-main-page.webp  ← ✅ Hero image (WebP, dioptimasi)
        │   ├── home-main-page.png   ← ⚠️ 14MB — hapus sebelum production
        │   ├── avatar/              ← ✅ 6 avatar profil (cute1–cute6.png)
        │   └── login/               ← ✅ Gambar background halaman login
        │
        ├── context/
        │   ├── AuthContext.tsx      ← ✅ Auth state (isLoggedIn, user, login, logout)
        │   └── LanguageContext.tsx  ← ✅ i18n ID/EN (t object, toggleLanguage)
        │
        ├── components/
        │   ├── auth/
        │   │   ├── LoginForm.tsx    ← ✅ Form login (email, password, show/hide pw)
        │   │   └── RegisterForm.tsx ← ✅ Form register (nama, email, pw, confirm pw)
        │   ├── common/
        │   │   ├── ScrollToTop.tsx  ← ✅ Floating scroll-to-top button
        │   │   └── ShapeGrid.tsx    ← ✅ Canvas animated grid background (diagonal)
        │   ├── dashboard/
        │   │   ├── DashboardSidebar.tsx  ← ✅ Sidebar profil user + avatar + stats
        │   │   ├── JobCard.tsx           ← ✅ Kartu rekomendasi pekerjaan
        │   │   ├── LearnCard.tsx         ← ✅ Kartu saran learning path
        │   │   ├── MarketTrendWidget.tsx ← ✅ Widget tren pasar kerja
        │   │   ├── MatchScoreGauge.tsx   ← ✅ Gauge skor kecocokan CV
        │   │   ├── SkillCloud.tsx        ← ✅ Visualisasi skill cloud
        │   │   └── WelcomePanel.tsx      ← ✅ Panel sambutan user post-login
        │   ├── home/
        │   │   ├── HeroSection.tsx       ← ✅ Landing hero + PixelBlast BG
        │   │   └── FeaturesSection.tsx   ← ✅ Bento grid features
        │   ├── layout/
        │   │   ├── Navbar.tsx            ← ✅ Sticky navbar (white theme, mobile drawer, auth-aware)
        │   │   └── Footer.tsx            ← ✅ Simple copyright footer
        │   └── ui/
        │       ├── SpiralAnimation.tsx   ← ✅ Canvas particle spiral (SplashPage BG)
        │       ├── PixelBlast.tsx        ← ✅ Pixel grid ripple (HeroSection BG)
        │       └── PixelBlast.css
        │
        ├── pages/
        │   ├── SplashPage.tsx       ← ✅ Animated intro (9.8s → redirect ke /)
        │   ├── HomePage.tsx         ← ✅ Landing: Hero + Features + Footer
        │   ├── auth/
        │   │   ├── AuthPage.tsx     ← ✅ Auth hub (shared layout login/register)
        │   │   ├── LoginPage.tsx    ← ✅ Halaman Sign In (split layout)
        │   │   └── RegisterPage.tsx ← ✅ Halaman Buat Akun (split layout)
        │   ├── cv/
        │   │   └── UploadPage.tsx   ← ✅ Upload CV + hasil simulasi AI (mock data)
        │   └── dashboard/
        │       └── DashboardPage.tsx ← ✅ Dashboard post-login (49KB — feature-rich)
        │
        ├── hooks/                   ← ⚠️ Folder ada, tapi kosong (belum diisi)
        ├── routes/                  ← ⚠️ Folder ada, tapi kosong
        ├── services/                ← ⚠️ Folder ada, tapi kosong
        ├── store/                   ← ⚠️ Folder ada, tapi kosong
        ├── types/                   ← ⚠️ Folder ada, tapi kosong
        └── utils/                   ← ⚠️ Folder ada, tapi kosong
```

---

## 5. Page Routing (Implementasi Saat Ini)

| Route | Component | Auth Required | Status |
|---|---|---|---|
| `/` | `SplashPage` → `HomePage` | No | ✅ Done |
| `/login` | `LoginPage` | No (redirect jika sudah login) | ✅ Done |
| `/register` | `RegisterPage` | No | ✅ Done |
| `/upload` | `UploadPage` | No (fitur penuh butuh login) | ✅ Done |
| `/dashboard` | `DashboardPage` | **Yes** | ✅ Done (mock data) |

> **Catatan**: Auth saat ini menggunakan **mock/localStorage** di `AuthContext.tsx`. Belum terhubung ke backend API nyata.

---

## 6. API Endpoints yang Dibutuhkan Backend

### Authentication
```
POST   /api/auth/register     → Daftar akun baru
POST   /api/auth/login        → Login, return JWT token
POST   /api/auth/logout       → Invalidate token
GET    /api/auth/me           → Get current user (requires auth)
```

### CV Processing
```
POST   /api/cv/upload         → Upload file CV (multipart/form-data, PDF/DOCX, max 10MB)
GET    /api/cv/result/:id     → Hasil analisis CV by ID
GET    /api/cv/history        → Riwayat CV user (requires auth)
```

### Job Recommendations (dari AI model)
```
GET    /api/jobs/recommendations   → Top job matches berdasarkan CV user
GET    /api/jobs/skill-gap         → Skill gap CV vs tren pasar
GET    /api/jobs/learning-path     → Saran learning path adaptif
```

### Health Check
```
GET    /health    → { status: 'ok', timestamp }
```

**Response format standar:**
```json
{
  "success": true,
  "data": { ... },
  "message": "string"
}
```

---

## 7. AI/ML Integration — Data Contract

Frontend mengonsumsi **response JSON** dari endpoint CV upload. Format yang **sudah diimplementasi di frontend (UploadPage.tsx)**:

```typescript
// Tipe data yang diharapkan frontend dari AI/backend
interface AiResult {
  rekomendasi_utama_bidang: string;        // "IT Helpdesk", "Data Analyst", dll
  skills_terdeteksi: string[];             // ["JavaScript", "Python", "SQL"]
  top_3_loker: Array<{
    posisi: string;                        // "Frontend Developer"
    perusahaan: string;                    // "PT. Tokopedia"
    industri: string;                      // "E-Commerce"
    skor_match: number;                    // 0–100
    saran_belajar: string[];              // ["Docker", "Kubernetes"]
  }>;
}
```

> **PENTING untuk AI Engineer**: Response dari Python model harus mengikuti format di atas persis. Field names harus sama (snake_case). Frontend sudah siap consume tanpa modifikasi jika format ini diikuti.

---

## 8. Frontend Auth Contract

`AuthContext.tsx` menyediakan interface berikut ke seluruh komponen:

```typescript
interface AuthContextType {
  user: User | null;      // { id, name, email, role, avatar? }
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}
```

**Saat backend sudah siap**, ganti implementasi `login()` di `AuthContext.tsx` dengan Axios call ke `/api/auth/login`. JWT token disimpan di `httpOnly` cookie (lebih aman dari localStorage).

---

## 9. Backend — Yang Harus Diimplementasi (Prioritas)

### 🔴 Prioritas 1 — Core (Blocking)
1. **Auth routes** (`/api/auth/register`, `/api/auth/login`, `/api/auth/me`)
   - Gunakan `bcryptjs` untuk hash password
   - Gunakan `jsonwebtoken` untuk generate/verify JWT
   - File: `backend/routes/authRoutes.js`, `controllers/authController.js`

2. **Database schema User**
   - Fields: `id`, `name`, `email`, `password_hash`, `created_at`
   - File: `backend/models/userModel.js`

3. **Auth middleware** (`backend/middleware/authMiddleware.js`)
   - Verifikasi JWT dari header `Authorization: Bearer <token>`

### 🟡 Prioritas 2 — CV Feature
4. **CV upload endpoint** (`POST /api/cv/upload`)
   - Gunakan `multer` untuk terima file
   - Validasi: hanya PDF/DOCX, max 10MB
   - Kirim file ke Python AI service via Axios
   - Return hasil dalam format `AiResult` (lihat seksi 7)

5. **Database schema CV**
   - Fields: `id`, `user_id`, `filename`, `result_json`, `created_at`

### 🟢 Prioritas 3 — Enhancement
6. **Job recommendation proxy** (`/api/jobs/*`)
   - Proxy ke Python AI service atau serve dari database

---

## 10. AI/ML — Yang Harus Diimplementasi

### Data Scientist
- [ ] Web scraping dataset lowongan (JobStreet, Glints, Loker.id)
- [ ] Data cleaning & EDA (Pandas, NumPy)
- [ ] Ekstraksi keyword kompetensi yang paling banyak dicari industri
- [ ] Export dataset bersih ke CSV/JSON untuk dikonsumsi AI Engineer
- [ ] Dashboard Streamlit untuk insight dataset

### AI Engineer
- [ ] NLP model untuk ekstraksi informasi CV (TensorFlow/Keras)
- [ ] Matching algorithm: CV skills vs dataset lowongan
- [ ] Output model harus dalam format `AiResult` (lihat seksi 7)
- [ ] Bungkus model dalam FastAPI/Flask REST endpoint: `POST /predict`
- [ ] Simpan model dalam format `.keras` atau `SavedModel`

**Endpoint AI yang dibutuhkan backend:**
```
POST   http://localhost:8000/predict
Body:  { "cv_text": "extracted text from PDF/DOCX" }
Response: AiResult JSON (lihat seksi 7)
```

---

## 11. Mock Data yang Digunakan Frontend (Untuk Referensi AI Engineer)

Di `UploadPage.tsx`, frontend menggunakan mock data ini untuk simulasi:

```javascript
const MOCK_AI_RESULT = {
  rekomendasi_utama_bidang: "Help Desk & IT Support",
  skills_terdeteksi: [
    "Communication", "Java", "JavaScript", "Leadership",
    "Python", "SQL", "Docker", "Git", "REST API", "Linux"
  ],
  top_3_loker: [
    {
      posisi: "IT HELPDESK",
      perusahaan: "CV. ARTHALAYA KARYA PARAMA",
      industri: "Help Desk & IT Support",
      skor_match: 98.9,
      saran_belajar: ["IT Support", "Customer Service", "Helpdesk", "Komputer", "DNS"]
    },
    {
      posisi: "Technical Support Engineer",
      perusahaan: "PT. Solusi Teknologi",
      industri: "Information Technology",
      skor_match: 87.4,
      saran_belajar: ["CCNA", "Cloud Computing", "PowerShell"]
    },
    {
      posisi: "System Administrator",
      perusahaan: "PT. Digital Nusantara",
      industri: "Technology Services",
      skor_match: 79.2,
      saran_belajar: ["VMware", "Active Directory", "Backup Solutions"]
    }
  ]
};
```

---

## 12. Development Commands

### Frontend
```bash
cd frontend
npm run dev        # Dev server → http://localhost:5174 (5173 jika port bebas)
npm run build      # Production build
npm run lint       # ESLint check
```

### Backend
```bash
cd backend
npm run dev        # Dev server (nodemon) → http://localhost:3000
```

### Backend — Setup awal (belum dilakukan)
```bash
cd backend
npm install bcryptjs jsonwebtoken multer express-validator
# Buat file .env
cp .env.example .env   # atau buat manual
```

---

## 13. Environment Variables

### Backend (`backend/.env`) — Buat manual, JANGAN commit
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRES_IN=7d
AI_SERVICE_URL=http://localhost:8000
```

### Frontend (`frontend/.env`) — Buat manual, JANGAN commit
```env
VITE_API_BASE_URL=http://localhost:3000
```

---

## 14. Design System & Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Primary Navy | `#001734` | Headings, buttons, icons |
| Primary Hover | `#002C59` | Button hover, gradient |
| Background | `#ffffff` | Page background (putih bersih) |
| Text Body | `#2C3E50` | Paragraph |
| Text Muted | `#6B7F96` | Secondary/caption |
| Text Subtle | `#8A9AB0` | Placeholder, hints |
| Border Light | `#E2EAF4` | Card borders |

**Font**: `Inter` (Google Fonts), weights 400–800.

---

## 15. Known Issues & TODO

| Item | Lokasi | Priority | Keterangan |
|---|---|---|---|
| Backend API belum ada | `backend/` | 🔴 Blocker | Semua masih mock data di frontend |
| Auth belum nyambung ke backend | `AuthContext.tsx` | 🔴 Blocker | Gunakan mock login sementara |
| `hooks/`, `services/`, `store/` kosong | `frontend/src/` | 🟡 Medium | Isi saat integrasi API dimulai |
| `routes/` folder kosong di frontend | `frontend/src/routes/` | 🟡 Medium | AppRouter sudah ada di App.tsx |
| Gambar PNG 14MB | `assets/home-main-page.png` | 🟡 Medium | Hapus sebelum deploy (sudah ada .webp) |
| Backend controllers/models stub | `backend/` | 🟡 Medium | Ganti placeholder dengan implementasi nyata |
| CORS masih localhost only | `backend/index.js` | 🟢 Low | Update ke domain production saat deploy |
| `middleware/` folder belum ada | `backend/` | 🟡 Medium | Buat folder + `authMiddleware.js` |

---

## 16. Security Notes

### Backend
- `helmet()` sudah aktif (CSP, X-Frame-Options, dll)
- Rate limiter: 100 req / 15 menit per IP
- Payload limit: 10KB JSON
- **Tambah nanti**: JWT verify middleware, Multer file validation

### Frontend
- Tidak ada `dangerouslySetInnerHTML`
- External links pakai `rel="noopener noreferrer"`
- JANGAN simpan JWT di `localStorage` — gunakan httpOnly cookie
- JANGAN simpan secrets di `VITE_` env vars

---

## 17. Git Conventions

- **Branch**: `main` → `develop` → `feature/nama-fitur`
- **Commit**: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`
- Jangan push langsung ke `main`
- Jangan commit file `.env`, `node_modules/`, `dist/`

---

## 18. Deployment Plan

| Service | Platform | Status |
|---|---|---|
| Frontend | Vercel | ○ Belum |
| Backend (Express) | Railway / Render | ○ Belum |
| AI Service (Python) | Hugging Face Spaces / VPS | ○ Belum |
| Database | Supabase / Railway | ○ Belum |

**Urutan deploy:**
1. Deploy backend → dapat production URL
2. Deploy Python AI service → dapat AI_SERVICE_URL
3. Update `.env` backend dengan AI_SERVICE_URL
4. Update `VITE_API_BASE_URL` di Vercel
5. Deploy frontend ke Vercel
6. Update CORS whitelist di backend

---

*Generated: 2026-05-31 | Team CC26-PSU117 | Coding Camp 2026 × DBS Foundation*