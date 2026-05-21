# NextStep — Project Guide for AI Assistants (CLAUDE.md)

This file is the single source of truth for AI coding assistants (Claude, Gemini, GitHub Copilot, etc.) working on this project. Read this entire file before making any changes to the codebase.

---

## 1. Project Overview

**Name:** NextStep
**Type:** Full-Stack Web Application (Capstone Project — Coding Camp 2026 powered by DBS Foundation)
**Team ID:** CC26-PSU117
**Theme:** Future-ready Work & Economy
**Tagline:** "Jalur cerdas menuju karier masa depan Anda"
**Full Title:** "Platform Rekomendasi Pekerjaan dan Adaptif Berbasis Analisis CV/Data dan Tren Pasar Kerja"
**Year:** 2026
**Deadline:** 8 Juni 2026 (Presentasi & Peer Review)

### Problem Statement
Ketidakmampuan pencari kerja dalam memetakan relevansi CV dan kompetensinya terhadap tren pasar, serta kesulitan perusahaan menyaring kandidat yang relevan, menyebabkan tingginya angka pengangguran terdidik. NextStep hadir sebagai mesin analitik karier yang proaktif — bukan portal lowongan konvensional.

### Core Research Questions
1. Bagaimana mengintegrasikan pemrosesan data CV dengan tren pasar kerja secara cerdas untuk menghasilkan tingkat akurasi rekomendasi pekerjaan yang tinggi?
2. Bagaimana platform adaptif dapat mengidentifikasi skills gap pengguna guna memberikan saran pengembangan diri yang tepat?

### Scope & Out-of-Scope
**In Scope:** Registrasi pengguna, ekstraksi CV via NLP, matching algorithm, rekomendasi pekerjaan, analisis skill gap, dataset lowongan statis atau API pihak ketiga terbatas.
**Out of Scope:** Mobile app native, fitur wawancara langsung.

---

## 2. Team & Roles

| ID | Nama | Peran | Status |
|---|---|---|---|
| CACC189D6Y0797 | Agyl Wendi Pratama | AI Engineer | Aktif |
| CACC195D6Y1214 | Fernando | AI Engineer | Aktif |
| CDCC189D6Y0825 | I Nyoman Dimas Kresna Adryan | Data Scientist | Aktif |
| CDCC498D6Y2757 | Dimas Rifqy Aulia Husaen | Data Scientist | Aktif |
| CFCC189D6Y1407 | Yohanes Adi Prasetya | Full-Stack Web Developer | Aktif |
| CFCC846D6Y1301 | Mohammad Dimas Al Fateh | Full-Stack Web Developer | Aktif |

### Tanggung Jawab per Peran

**Data Scientist:**
- Web scraping lowongan kerja IT dari JobStreet, Loker.id, SkillHub, Glints
- Data cleaning & wrangling (Pandas, NumPy)
- Ekstraksi keyword kompetensi/alat teknis yang paling banyak dicari industri
- Exploratory Data Analysis (EDA) & visualisasi (Matplotlib)
- Memastikan dataset bersih dan siap diproses model
- Membuat Data Dictionary
- Dashboard interaktif via Streamlit

**AI Engineer:**
- Membangun model NLP untuk ekstraksi informasi dari CV (TensorFlow/Keras, Functional API atau Model Subclassing)
- Algoritma pencocokan (matching) CV dengan lowongan
- Mengoptimalkan akurasi rekomendasi pekerjaan dan jalur belajar adaptif
- Implementasi minimal 1 komponen kustom (Custom Layer / Loss Function / Callback)
- Menyimpan dan mengekspor model dalam format `.keras` atau `SavedModel`
- Membuat kode inference model

**Full-Stack Web Developer:**
- Membangun RESTful API backend (Express.js) sebagai jembatan model AI ke frontend
- Merancang dan mengimplementasikan frontend React yang responsif
- Integrasi API model AI ke aplikasi web (networking calls)
- Manajemen rute, database connectivity, dan deployment ke server cloud

---

## 3. Project Milestones & Timeline

| Tanggal | Milestone | Status |
|---|---|---|
| 31 Mar 2026 | Kick-off Tim Capstone | ✅ Selesai |
| 17 Apr 2026 | Project Plan Selesai | ✅ Selesai |
| 23 Apr 2026 | Dok. Spesifikasi + Dataset Siap | ○ Mendatang |
| 30 Apr 2026 | Model AI Dasar + Server Aktif | ○ Mendatang |
| 7 Mei 2026 | UI Interaktif + Integrasi Selesai | ○ Mendatang |
| 14 Mei 2026 | Testing & Akurasi Memenuhi Standar | ○ Mendatang |
| 17 Mei 2026 | Pengumpulan Laporan Kemajuan | ○ Mendatang |
| 21 Mei 2026 | Platform Live + Laporan Selesai | ○ Mendatang |
| 5 Jun 2026 | DEADLINE — Presentasi Akhir | ○ Mendatang |
| 7 Jun 2026 | Pengumpulan Project Brief | ○ Mendatang |
| 8 Jun 2026 | Presentasi dan Peer Review | ○ Mendatang |

### Fase Pengerjaan (5 Minggu Aktif)

**Minggu 1** — Perencanaan Sistem & Persiapan Data
- Analisis kebutuhan fungsional, perancangan UI/UX, pengumpulan dataset, pembersihan data awal.

**Minggu 2** — Pengembangan Model Inti & Infrastruktur Server
- Model NLP ekstraksi CV (AI Engineer), analisis data lanjutan (Data Scientist), server & API dasar (FS Developer).

**Minggu 3** — Pengembangan Antarmuka & Integrasi Sistem
- Implementasi desain ke kode web, integrasi server utama dengan model AI.

**Minggu 4** — Testing & Evaluasi Akurasi
- Pengujian akurasi algoritma, pengujian fungsionalitas web, debugging kolaboratif.

**Minggu 5** — Finalisasi, Deployment & Pelaporan
- Deployment ke server cloud publik, perbaikan minor, penyusunan laporan akhir.

---

## 4. Capstone Checklist — Full-Stack Web Developer

### Main Quest (Wajib) ✅ = Harus dipenuhi semua
- [ ] Menggunakan networking calls untuk berinteraksi dengan API pada proyek
- [ ] Menggunakan module bundler (Vite) untuk membangun proyek aplikasi web
- [ ] Membangun RESTful API untuk mendukung aplikasi Frontend
- [ ] RESTful API dapat menyimpan data dengan atau tanpa menggunakan database
- [ ] Membuat RESTful API dengan URL yang mengikuti standar konvensi RESTful
- [ ] Mengintegrasikan kemampuan AI/ML sebagai fitur utama aplikasi (via backend maupun browser)
- [ ] Memastikan implementasi fitur utama berjalan baik tanpa menyebabkan aplikasi crash

### Side Quest (Opsional, Nilai Tambah)
- [x] Membuat mockup aplikasi sebagai representasi visual desain UI *(sudah ada di Figma/design)*
- [ ] Membangun layout aplikasi web yang responsif untuk berbagai ukuran layar
- [ ] RESTful API dapat menyimpan data ke dalam database
- [x] RESTful API dibangun menggunakan framework Express *(sudah diimplementasikan)*
- [x] Rekomendasi tools: Bootstrap/Tailwind CSS, Axios *(Tailwind sudah digunakan)*
- [ ] Melakukan deployment aplikasi web ke server
- [ ] Rekomendasi hosting: GitHub Pages, Netlify, atau Vercel

---

## 5. Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | ^19.1.1 | UI framework |
| TypeScript | ~5.9.3 | Type safety |
| Vite | ^7.1.7 | Build tool & dev server |
| Tailwind CSS | ^4.3.0 | Utility-first CSS (via @tailwindcss/vite) |
| React Router DOM | (to be added) | Client-side routing |
| Axios | (to be added) | HTTP client untuk API calls |
| Zustand atau Redux Toolkit | (to be added) | Global state management |
| GSAP | ^3.15.0 | High-performance animation library |
| Three.js | ^0.184.0 | 3D rendering (reserved for future features) |
| postprocessing | ^6.39.1 | Post-processing effects for Three.js |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | (system) | Runtime |
| Express | ^5.2.1 | HTTP server framework |
| cors | latest | Cross-Origin Resource Sharing |
| helmet | latest | HTTP security headers |
| express-rate-limit | latest | Request rate limiting (DoS protection) |
| dotenv | ^17.2.3 | Environment variable management |
| nodemon | ^3.1.11 | Dev server auto-reload |
| bcryptjs | (to be added) | Password hashing |
| jsonwebtoken | (to be added) | JWT authentication |
| multer | (to be added) | File upload (CV PDF/DOCX) |
| express-validator atau zod | (to be added) | Request body validation |

### AI/ML (Python — terpisah dari Node.js backend, diekspos via REST API)
| Technology | Purpose |
|---|---|
| Python | Bahasa utama AI/ML |
| TensorFlow & Keras | Deep Learning model (Functional API / Model Subclassing) |
| Scikit-Learn | Pemodelan awal & evaluasi |
| Pandas & NumPy | Data wrangling & manipulasi |
| Matplotlib | Visualisasi data |
| Streamlit | Dashboard eksplorasi & insight |
| FastAPI atau Flask | REST API mandiri untuk melayani model ML |
| Postman | Pengujian & pengelolaan API |

### Data Sources
- JobStreet, Loker.id, SkillHub, Glints (web scraping via Puppeteer/Python)
- Dataset lowongan statis (CSV/JSON) atau API pihak ketiga terbatas

### Database
- Folder `database/` masih kosong (reserved, migration scripts to be added)
- Rencana: PostgreSQL atau MySQL dengan ORM (Prisma atau Sequelize)

### Tools & Collaboration
| Tool | Purpose |
|---|---|
| Git & GitHub | Version control & kolaborasi |
| Visual Studio Code | IDE pengembangan aplikasi |
| Google Colab | Eksperimen pelatihan model AI |
| Postman | Testing & pengelolaan API endpoint |

---

## 6. Project Structure

```
FullStack-NextStep/
├── claude.md                   ← This file (AI context guide)
├── .gitignore                  ← Root gitignore (covers Node, Python, OS files)
├── backend/
│   ├── index.js                ← Server entry point (Express + security middleware)
│   ├── package.json            ← Backend dependencies & scripts
│   ├── .env.example            ← Template env vars (never commit .env)
│   ├── controllers/
│   │   ├── controller.js       ← Placeholder (ganti dengan feature-based files)
│   │   ├── authController.js   ← [TODO] Register, Login, Logout logic
│   │   └── cvController.js     ← [TODO] Upload, parsing, AI call logic
│   ├── models/
│   │   ├── model.js            ← Placeholder
│   │   ├── userModel.js        ← [TODO] User schema/ORM
│   │   └── cvModel.js          ← [TODO] CV upload record schema
│   ├── routes/
│   │   ├── api.js              ← Placeholder
│   │   ├── authRoutes.js       ← [TODO] POST /auth/register, /auth/login, /auth/logout
│   │   └── cvRoutes.js         ← [TODO] POST /cv/upload, GET /cv/result/:id
│   ├── middleware/
│   │   ├── authMiddleware.js   ← [TODO] JWT token verification
│   │   └── uploadMiddleware.js ← [TODO] Multer config untuk CV upload
│   └── services/
│       ├── service.js          ← Placeholder
│       ├── authService.js      ← [TODO] Business logic auth (bcrypt, JWT)
│       └── cvService.js        ← [TODO] Call AI/ML API, process result
├── database/
│   └── .gitkeep                ← Empty, reserved for migration scripts
└── frontend/
    ├── index.html              ← Vite HTML entry point
    ├── vite.config.ts          ← Vite configuration
    ├── tsconfig.json           ← TypeScript root config
    ├── tsconfig.app.json       ← App-specific TS config
    ├── tsconfig.node.json      ← Node-specific TS config
    ├── components.json         ← shadcn/ui component registry config
    ├── eslint.config.js        ← ESLint flat config (v9+)
    └── src/
        ├── main.tsx            ← React DOM entry point (StrictMode)
        ├── App.tsx             ← Root component (SplashPage → Router routing)
        ├── index.css           ← Global styles (Tailwind v4, Inter font, animations)
        ├── vite-env.d.ts       ← Vite env type declarations
        ├── assets/
        │   └── home-main-page.png  ← ⚠️ ~14MB, convert to .webp sebelum production
        ├── components/
        │   ├── auth/
        │   │   ├── LoginForm.tsx        ← [TODO] Form Sign In (email + password)
        │   │   └── RegisterForm.tsx     ← [TODO] Form Buat Akun (nama, email, password, confirm)
        │   ├── common/
        │   │   └── ScrollToTop.tsx      ← Floating scroll-to-top button
        │   ├── cv/
        │   │   ├── CVUploadZone.tsx     ← [TODO] Drag & Drop zone (PDF/DOCX, max 10MB)
        │   │   └── CVResultCard.tsx     ← [TODO] Tampilkan hasil analisis CV
        │   ├── dashboard/
        │   │   ├── JobRecommendationCard.tsx ← [TODO] Kartu rekomendasi pekerjaan
        │   │   ├── SkillGapChart.tsx         ← [TODO] Visualisasi skill gap
        │   │   └── LearningPathCard.tsx      ← [TODO] Saran learning path
        │   ├── home/
        │   │   ├── HeroSection.tsx      ← Landing page hero dengan PixelBlast BG
        │   │   └── FeaturesSection.tsx  ← Bento grid features section
        │   ├── layout/
        │   │   ├── Navbar.tsx           ← Sticky navbar dengan mobile drawer
        │   │   ├── NavbarAuth.tsx       ← [TODO] Navbar post-login (user avatar, logout)
        │   │   └── Footer.tsx           ← Simple footer dengan copyright
        │   └── ui/
        │       ├── SpiralAnimation.tsx  ← Canvas particle spiral (GSAP) — SplashPage BG
        │       ├── PixelBlast.tsx       ← Pixel grid ripple animation — HeroSection BG
        │       └── PixelBlast.css       ← Styles untuk PixelBlast
        ├── hooks/
        │   ├── useAuth.ts          ← [TODO] Hook untuk akses auth state & actions
        │   └── useCVUpload.ts      ← [TODO] Hook untuk upload state & progress
        ├── pages/
        │   ├── HomePage.tsx        ← ✅ Selesai — Navbar + Hero + Features + Footer
        │   ├── SplashPage.tsx      ← ✅ Selesai — Animated splash/intro screen
        │   ├── auth/
        │   │   ├── LoginPage.tsx   ← [TODO] Halaman Sign In (split layout: dark left + form right)
        │   │   └── RegisterPage.tsx← [TODO] Halaman Buat Akun (split layout: form left + dark right)
        │   ├── cv/
        │   │   ├── UploadCVPage.tsx   ← [TODO] Halaman Upload CV (tanpa login & dengan login)
        │   │   └── CVResultPage.tsx   ← [TODO] Halaman hasil analisis CV
        │   └── dashboard/
        │       └── DashboardPage.tsx  ← [TODO] Dashboard user post-login
        ├── routes/
        │   └── AppRouter.tsx       ← [TODO] React Router — definisi semua routes & protected routes
        ├── services/
        │   ├── authService.ts      ← [TODO] Axios calls: login, register, logout
        │   └── cvService.ts        ← [TODO] Axios calls: upload CV, get result
        ├── store/
        │   └── authStore.ts        ← [TODO] Zustand store untuk user session
        └── utils/
            ├── validators.ts       ← [TODO] Validasi form (email format, password strength)
            └── formatters.ts       ← [TODO] Helper format tanggal, persentase, dll
```

---

## 7. Page Routing

| Route | Component | Auth Required | Status |
|---|---|---|---|
| `/` | `SplashPage` → `HomePage` | No | ✅ Done |
| `/login` | `LoginPage` | No (redirect if logged in) | 🔨 TODO |
| `/register` | `RegisterPage` | No (redirect if logged in) | 🔨 TODO |
| `/upload` | `UploadCVPage` | No (tapi fitur penuh butuh login) | 🔨 TODO |
| `/dashboard` | `DashboardPage` | **Yes** | 🔨 TODO |
| `/cv/result/:id` | `CVResultPage` | **Yes** | 🔨 TODO |

**Protected Route Logic:** Jika user belum login dan akses `/dashboard` atau `/cv/result/:id`, redirect ke `/login`.

---

## 8. API Endpoints (Planned RESTful)

### Authentication
```
POST   /api/auth/register     ← Daftar akun baru
POST   /api/auth/login        ← Login, return JWT token
POST   /api/auth/logout       ← Invalidate token (opsional, jika stateful)
GET    /api/auth/me           ← Get current user data (requires auth)
```

### CV Processing
```
POST   /api/cv/upload         ← Upload file CV (multipart/form-data, PDF/DOCX, max 10MB)
GET    /api/cv/result/:id     ← Get hasil analisis CV by job result ID
GET    /api/cv/history        ← Riwayat CV yang pernah diupload user (requires auth)
```

### Job Recommendations (dari model AI)
```
GET    /api/jobs/recommendations   ← Rekomendasi pekerjaan berdasarkan CV user
GET    /api/jobs/skill-gap         ← Skill gap analysis hasil dari CV vs tren pasar
GET    /api/jobs/learning-path     ← Saran learning path adaptif
```

### Health Check
```
GET    /health                ← Server status check { status: 'ok', timestamp }
```

**Konvensi URL:**
- Semua endpoint diawali `/api/`
- Gunakan plural nouns (`/jobs`, `/users`, `/cvs`)
- Gunakan HTTP method yang tepat (GET, POST, PUT/PATCH, DELETE)
- Response selalu JSON dengan struktur: `{ success: boolean, data: any, message: string }`

---

## 9. UI/UX Design Specifications

### Halaman yang Sudah Diimplementasi

#### Splash Page (`/`)
- Background putih penuh dengan animasi spiral partikel navy (`SpiralAnimation.tsx`)
- Logo "NextStep" bold + tagline "JALUR CERDAS MENUJU KARIER" muncul setelah 4.5 detik
- Fade out pada 9 detik, transisi ke HomePage pada 9.8 detik

#### Home Page (`/`)
- **Hero Section**: Split layout — kiri teks + CTA "Lihat Metodologi", kanan foto profesional grayscale. Background `PixelBlast` dot grid ripple.
- **Features Section (Bento Grid)**:
  - Kartu besar: "Pemetaan Berbasis Analisis CV Anda"
  - Kartu kanan: "Diagnostik Keahlian" + "Learn more →"
  - Kartu kiri bawah: "Premium Opportunities"
  - Kartu CTA dark navy: "Buka Potensi Penuh CV-mu!" + tombol "Log in / Daftar"
- **Footer**: Minimal, copyright 2026

### Halaman yang Sudah Didesain (UI/UX Siap, Implementasi TODO)

#### Login Page (`/login`) — Split Layout
- **Kiri (50%)**: Panel dark navy (`#001734`) dengan foto/ilustrasi profesional gelap. Logo "NextStep" putih di pojok kiri atas. Heading besar putih: *"Advance your career with precision."* Deskripsi singkat motivasi platform.
- **Kanan (50%)**: Background putih. Heading "Sign in", sub-heading "Masukkan kredensial Anda untuk mengakses akun Anda."
  - Field: **Email Address** (placeholder: `name@company.com`)
  - Field: **Password** (placeholder: dots) + link "Lupa Password?" di kanan label
  - CTA Button: "Login" — full width, background `#001734`
  - Footer form: "Belum punya akun? **Daftar sekarang**" (link ke `/register`)

#### Register Page (`/register`) — Split Layout (Mirror dari Login)
- **Kiri (50%)**: Background putih. Heading "Buat Akun", sub-heading "Mulailah perjalanan profesional Anda hari ini."
  - Field: **Nama Lengkap** (placeholder: `Cth. Bambang Santoso`)
  - Field: **Email** (placeholder: `bambangs@gmail.com`)
  - Field: **Password** (placeholder: dots)
  - Field: **Confirm Password** (placeholder: dots)
  - CTA Button: "Daftar" — full width, background `#001734`
  - Footer form: "Sudah punya akun? **Login**" (link ke `/login`)
- **Kanan (50%)**: Panel dark navy dengan foto/ilustrasi profesional gelap. Logo "NextStep" putih di pojok kanan atas. Kutipan testimonial di bawah: *"NextStep provided the structured clarity I needed to elevate my career trajectory." — Sarah J., Director of Operations*

#### Upload CV Page (`/upload`) — Full Page (No Navbar biasa)
- Header minimal: logo "NextStep" kiri + tombol "× Cancel" kanan
- Background: light grey (`#F8FAFC`)
- Konten tengah:
  - Heading besar: **"Rancang Masa Depan Anda"**
  - Sub-heading: "Unggah Curriculum Vitae Anda di sini untuk menghubungkan pengalaman Anda dengan peluang karir yang sesuai."
  - **Kiri**: Drag & Drop zone berbatas dashed — ikon upload, teks "Drag & Drop your CV", sub-teks "Kami hanya menerima format PDF & DOCX (Maks 10MB)", tombol "Browse Files" (background `#001734`)
  - **Kanan (2 info cards)**:
    - Card 1 — ikon robot/AI: **"Intelligent Matching"** — deskripsi teknologi AI analisis portofolio
    - Card 2 — ikon kunci: **"Strictly Confidential"** — deskripsi enkripsi data & privasi

### Halaman Belum Didesain (UI/UX Perlu Dibuat)

#### Dashboard Page (`/dashboard`) — Post Login
- Planned content: sambutan user, summary CV terakhir, daftar rekomendasi pekerjaan, skill gap chart, saran learning path, riwayat aktivitas.

#### CV Result Page (`/cv/result/:id`) — Post Upload
- Planned content: skor kesesuaian CV, skill yang teridentifikasi, rekomendasi pekerjaan yang cocok, skill gap yang perlu ditingkatkan, saran learning path.

---

## 10. Development Commands

### Frontend
```bash
cd frontend
npm run dev        # Dev server → http://localhost:5173
npm run build      # Type-check + production build
npm run preview    # Preview production build
npm run lint       # ESLint check
```

### Backend
```bash
cd backend
npm run dev        # Dev server dengan auto-reload → http://localhost:3000
node index.js      # Production server
```

---

## 11. Architecture & Design Patterns

### Frontend Architecture
- **Component Domain Structure**: Komponen diorganisir per domain/fitur (`auth/`, `cv/`, `home/`, `dashboard/`), bukan per tipe semata.
- **Atomic UI Layer**: Komponen UI generik/reusable di `components/ui/` (`SpiralAnimation`, `PixelBlast`).
- **Page Composition**: Halaman di `pages/` adalah komposisi tipis dari layout dan feature components.
- **Splash → App Flow**: `App.tsx` menggunakan `showSplash` boolean state. Setelah ~9.8 detik, panggil `onFinish()` untuk reveal `RouterOutlet`. Setelah React Router diimplementasi, `App.tsx` berisi `<AppRouter />` sepenuhnya.
- **Protected Routes**: Route yang butuh auth (`/dashboard`, `/cv/result/:id`) dibungkus `ProtectedRoute` component yang cek auth state dari Zustand store; redirect ke `/login` jika belum login.

### Backend Architecture (MVC/Layered)
- **Routes** (`routes/`): Definisi HTTP endpoints. Map URL ke controller functions.
- **Controllers** (`controllers/`): Handle request/response cycle. Memanggil services.
- **Services** (`services/`): Semua business logic. Memanggil models dan external APIs (model AI).
- **Models** (`models/`): Interface ke database (ORM layer).
- **Middleware** (`middleware/`): Auth JWT verification, file upload (Multer), error handler global.

### AI Integration Flow
```
User Upload CV (Frontend)
  → POST /api/cv/upload (Express Backend)
    → Multer simpan file sementara
    → cvService.js call AI/ML API (FastAPI/Flask Python server)
      → Python NLP model ekstrak skills dari CV
      → Matching algorithm dengan dataset lowongan
      → Return: { matched_jobs, skill_gap, learning_path, score }
    → Simpan hasil ke database
    → Return hasil ke frontend
  → Frontend tampilkan di CVResultPage / Dashboard
```

---

## 12. Design System & Brand

### Brand Colors
| Token | Hex | Usage |
|---|---|---|
| Primary (Dark Navy) | `#001734` | Text, headings, primary buttons, icons, panel kiri login |
| Primary Hover | `#002C59` | Button hover, gradient end |
| Background Main | `#F8FAFC` | Page & section backgrounds |
| Background Card | `#F1F5F9` | Feature cards (muted) |
| Text Body | `#495057` | Paragraph text |
| Text Muted | `#6C757D` | Secondary/caption text |
| Text Link | `#64748B` | Footer links |
| White | `#FFFFFF` | Text on dark backgrounds, form panels |

### Typography
- **Font Family**: `Inter` (Google Fonts) — weights 400, 500, 600, 700, 800, 900
- **Fallback**: `system-ui`, `-apple-system`, `sans-serif`
- **Font Smoothing**: `antialiased` pada `:root`

### Layout
- **Content Container**: Max-width `1200px`, centered, `px-6` mobile, `px-10` desktop (`lg:`).
- **Auth Pages (Login/Register)**: Full viewport height, 50/50 split layout, no navbar/footer.
- **Upload CV Page**: Full viewport, minimal header, konten centered.
- **Responsive breakpoints**: Tailwind defaults (`sm:640px`, `md:768px`, `lg:1024px`).

### Animation System (CSS Utilities di `index.css`)
| Class | Animation | Duration |
|---|---|---|
| `.anim-fade-up` | fadeInUp (Y: 20px → 0) | 0.8s |
| `.anim-slide-left` | fadeSlideLeft (X: -30px → 0) | 1s |
| `.anim-slide-right` | fadeSlideRight (X: 30px → 0) | 1s |
| `.anim-float` | floatSmooth (Y oscillate ±12px) | 4s infinite |
| `.anim-pulse-glow` | pulseGlow (opacity + scale pulse) | 2s infinite |
| `.delay-{n}` | animation-delay utilities | 100/200/300/500ms |

---

## 13. Key Components — Detailed Notes

### `SpiralAnimation.tsx`
- **Purpose**: Full-screen canvas particle animation untuk `SplashPage` background.
- **Renderer**: `CanvasRenderingContext2D` (2D canvas), driven by `gsap.timeline({ repeat: -1 })`.
- **Stars**: 4,000 `Star` instances arranged along a mathematical spiral path.
- **Seeded Random**: Custom LCG PRNG dengan seed `1234` — deterministic & identical tiap page load. PRNG dipass sebagai parameter ke `Star` constructors — TIDAK memodifikasi `Math.random` global.
- **Props**: `bgColor` (default `'white'`), `particleColor` (default `'#001734'`).
- **Cleanup**: `AnimationController.destroy()` panggil `timeline.kill()` on unmount — cegah GSAP memory leaks.
- **`cameraZ` dan `viewZoom`**: `public readonly` pada `AnimationController` agar class `Star` bisa baca langsung tanpa unsafe type casting.

### `PixelBlast.tsx`
- **Purpose**: Interactive canvas pixel-grid ripple animation — decorative background di `HeroSection`.
- **Masking**: Parent `<div>` di `HeroSection` apply `radial-gradient` mask image untuk vignette effect.
- **Props**: `variant`, `pixelSize`, `color`, `patternScale`, `patternDensity`, `pixelSizeJitter`, `enableRipples`, `rippleSpeed`, `rippleThickness`, `rippleIntensityScale`, `liquid`, `liquidStrength`, `liquidRadius`, `liquidWobbleSpeed`, `speed`, `edgeFade`, `transparent`.

### `Navbar.tsx`
- **Behavior**: Sticky top, style berubah saat scroll (`bg-white/80 backdrop-blur-md shadow-sm` ketika `scrollY > 20`).
- **Mobile**: Hamburger button toggle slide-down drawer via `max-h` CSS transition.
- **Links**: `/login` (Log In), `/upload` (Upload CV).

### `SplashPage.tsx`
- **Timers**: `4500ms` teks fade in → `9000ms` fadeOut dimulai → `9800ms` `onFinish()` dipanggil.
- **Cleanup**: Semua 3 `setTimeout` dibersihkan di `useEffect` cleanup function.

### `LoginPage.tsx` (TODO)
- Split layout: panel kiri dark navy (foto + motivational text), panel kanan putih (form sign in).
- Field: email, password + "Lupa Password?", tombol "Login", link "Daftar sekarang".
- Redirect ke `/dashboard` jika login berhasil.
- Redirect ke `/` jika sudah login.

### `RegisterPage.tsx` (TODO)
- Split layout: panel kiri putih (form), panel kanan dark navy (foto + testimonial quote).
- Field: Nama Lengkap, Email, Password, Confirm Password, tombol "Daftar".
- Link balik ke `/login`.

### `UploadCVPage.tsx` (TODO)
- Minimal header: logo kiri + Cancel kanan.
- Drag & Drop zone dengan `react-dropzone` atau HTML5 drag events.
- Validasi: hanya PDF & DOCX, maksimum 10MB.
- State: idle → dragging → uploading (progress) → success/error.
- Dua info card di kanan: Intelligent Matching + Strictly Confidential.
- Jika user belum login: upload bisa dilakukan tapi hasil hanya preview, prompt untuk login/daftar untuk simpan & akses penuh.

---

## 14. Security Configuration

### Backend Security Stack (di `backend/index.js`)
- **`helmet()`**: Applied globally. Sets `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, removes `X-Powered-By`.
- **`cors({ origin: [...] })`**: Whitelist — saat ini `http://localhost:5173` & `http://127.0.0.1:5173`. **WAJIB diupdate ke production domain sebelum deployment.**
- **`express.json({ limit: '10kb' })`**: Mencegah oversized JSON payload attacks.
- **`rateLimit({ windowMs: 15min, limit: 100 })`**: Blokir excessive requests per IP. Return HTTP 429 + JSON message.
- **`/health` endpoint**: Return `{ status: 'ok', timestamp }` untuk uptime monitoring.
- **JWT**: Semua protected routes verifikasi token via `authMiddleware.js`. Token disimpan di `httpOnly` cookie (lebih aman) atau `Authorization: Bearer` header.
- **Multer**: Validasi tipe file (PDF/DOCX only), batas ukuran 10MB, simpan di `/tmp` sebelum dikirim ke AI service.

### Frontend Security Notes
- Tidak ada `dangerouslySetInnerHTML` di seluruh codebase.
- Semua external links gunakan `rel="noopener noreferrer"`.
- Environment variables API URL gunakan prefix `VITE_`, jangan pernah simpan secrets.
- JWT token jangan disimpan di `localStorage` — gunakan `httpOnly` cookie atau Zustand in-memory.

---

## 15. Known Issues & Warnings

| Issue | Location | Severity | Notes |
|---|---|---|---|
| CSS `@import` order warning | `frontend/src/index.css` line 2 | ⚠️ Warning | `@import url(...)` Google Fonts harus sebelum `@import "tailwindcss"`. Pindah ke baris 1. |
| Large JS chunk (~832KB) | `frontend/dist/assets/index-*.js` | ⚠️ Warning | Three.js & postprocessing inflate bundle. Gunakan dynamic `import()` saat fitur 3D diimplementasi. |
| Large image asset (~14MB) | `home-main-page.png` | ⚠️ Warning | Konversi ke `.webp` dan optimasi sebelum production. |
| Empty placeholder files | `backend/controllers/`, `models/`, `routes/`, `services/` | 📝 Info | Ganti stub dengan feature-specific files. |
| Missing `.env` file | `backend/` | 📝 Info | Buat `backend/.env` dengan `PORT=3000` dan database credentials. |
| React Router belum ada | `frontend/src/routes/` | 🔴 Blocker | Semua halaman baru (`/login`, `/register`, `/upload`, `/dashboard`) tidak bisa diakses tanpa React Router. |
| Auth belum diimplementasi | `frontend/src/store/`, `backend/` | 🔴 Blocker | Diperlukan sebelum halaman dashboard & CV result. |

---

## 16. Environment Variables

### Backend (`backend/.env`) — Buat manual, jangan commit
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
AI_SERVICE_URL=http://localhost:8000
```

### Frontend (`frontend/.env`) — Buat manual, jangan commit
```env
VITE_API_BASE_URL=http://localhost:3000
```

---

## 17. Coding Standards & Conventions

### General
- Gunakan **TypeScript** di seluruh frontend. Jangan pakai tipe `any`.
- Hindari `as unknown as X` type casting — refactor agar natively type-safe.
- Komponen harus export single default export.
- Nama file: **PascalCase** untuk komponen (`.tsx`), **camelCase** untuk utilities (`.ts`).

### React
- Gunakan functional components dengan hooks (tidak ada class components).
- Bersihkan semua side effects (`useEffect` cleanup, event listener removal, timer clearing).
- `React.StrictMode` aktif — pastikan tidak ada deprecated lifecycle methods atau impure renderers.

### CSS / Styling
- Gunakan **Tailwind CSS v4** utility classes sebagai metode styling utama.
- Custom animations dan design tokens di `src/index.css` di bawah `@theme {}` atau sebagai `@keyframes`.
- Hindari inline `style={{}}` untuk apapun yang bisa diekspresikan sebagai Tailwind class.
- Brand colors (`#001734`, dll.) disarankan ditambahkan ke `@theme {}` block di `index.css`.

### Backend
- Gunakan ES Module syntax (`import`/`export`) — `"type": "module"` sudah diset di `package.json`.
- Semua route handlers wajib gunakan `try/catch` dan pass error ke `next(err)`.
- Jangan commit `.env` files. Gunakan `.env.example` sebagai reference template.
- Validasi semua incoming request bodies sebelum diproses (gunakan `express-validator` atau `zod`).

---

## 18. Git & Collaboration

- Root `.gitignore` mencakup: `node_modules/`, `dist/`, `.env`, OS files (`.DS_Store`, `Thumbs.db`), editor configs, Python virtualenvs, log files.
- **Branch strategy** (recommended): `main` (production) → `develop` → `feature/feature-name`
- **Commit message format**: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`
- Jangan push langsung ke `main`. Selalu buat PR dari `feature/*` ke `develop`.

---

## 19. Deployment Plan

- **Target Hosting**: Vercel (frontend), Railway / Render / VPS (backend), Streamlit Cloud (AI dashboard)
- **Rekomendasi sequence deployment**:
  1. Deploy backend ke Railway/Render — dapatkan production URL
  2. Update `VITE_API_BASE_URL` di Vercel env vars ke production backend URL
  3. Deploy frontend ke Vercel
  4. Update `cors` whitelist di backend dengan Vercel domain
  5. Deploy Python AI service (FastAPI/Flask) ke server cloud terpisah
- **Pre-deployment checklist**:
  - [ ] Konversi `home-main-page.png` ke `.webp`
  - [ ] Terapkan dynamic import untuk Three.js
  - [ ] Update CORS whitelist ke domain production
  - [ ] Set semua env vars di hosting provider
  - [ ] Jalankan `npm run build` dan verifikasi tidak ada error

---

*Last updated: 2026-05-21 — Expanded from Project Plan CC26-PSU117 (Coding Camp 2026 powered by DBS Foundation). Keep this file updated as the project evolves.*