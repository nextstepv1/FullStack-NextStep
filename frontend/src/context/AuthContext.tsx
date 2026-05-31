// ============================================================
// FILE: src/context/AuthContext.tsx
// DESKRIPSI: Context global untuk manajemen sesi login user.
//
// CARA KERJA:
//   - Data user disimpan di sessionStorage (terhapus saat tab ditutup)
//   - Saat backend siap, fungsi `login()` bisa dimodifikasi untuk
//     menerima JWT token dari API dan menyimpannya di sini.
//
// CATATAN BACKEND:
//   - Setelah API login siap (POST /api/auth/login), ganti bagian dalam
//     fungsi `login()` untuk menyimpan JWT token yang diterima dari response.
//   - Tambahkan interceptor Axios di `src/services/api.ts` untuk
//     menyisipkan token di header setiap request.
// ============================================================

import React, { createContext, useState, useContext, useCallback } from 'react';
import type { UserSession } from '../types/dashboard';
import { STORAGE_KEYS } from '../utils/mockData';

// ─── Tipe data yang tersedia dari context ini ────────────────
interface AuthContextProps {
  user: UserSession | null;       // Data user yang sedang login (null jika belum login)
  isLoggedIn: boolean;            // Shortcut: apakah user sudah login?
  login: (userData: UserSession) => void;  // Fungsi untuk simpan data login
  logout: () => void;             // Fungsi untuk hapus sesi login
  updateUser: (fields: Partial<UserSession>) => void; // Fungsi untuk update data user dinamis
}

// Buat context dengan nilai default undefined
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// ─── Provider Component ──────────────────────────────────────
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  // Coba baca data user dari sessionStorage saat aplikasi pertama kali dimuat.
  // Ini memastikan user tetap login jika mereka me-refresh halaman (selama tab masih terbuka).
  const [user, setUser] = useState<UserSession | null>(() => {
    const saved = sessionStorage.getItem(STORAGE_KEYS.SESSION_USER);
    if (saved) {
      try {
        return JSON.parse(saved) as UserSession;
      } catch {
        // Jika data corrupt, hapus saja
        sessionStorage.removeItem(STORAGE_KEYS.SESSION_USER);
        return null;
      }
    }
    return null;
  });

  // ── Fungsi Login ─────────────────────────────────────────────
  // Simpan data user ke state React DAN sessionStorage.
  // TODO (Backend): Setelah API siap, tambahkan penyimpanan JWT token di sini.
  // Contoh: sessionStorage.setItem('nextstep_token', response.data.token)
  const login = useCallback((userData: UserSession) => {
    setUser(userData);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(userData));
  }, []);

  // ── Fungsi Logout ─────────────────────────────────────────────
  // Hapus semua data sesi dari sessionStorage dan reset state.
  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem(STORAGE_KEYS.SESSION_USER);
    // TODO (Backend): Tambahkan juga penghapusan JWT token di sini
    // sessionStorage.removeItem('nextstep_token');
  }, []);

  // ── Fungsi Update User ─────────────────────────────────────────
  // Update field user tertentu di state dan sessionStorage
  const updateUser = useCallback((fields: Partial<UserSession>) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, ...fields };
      sessionStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: user !== null,
      login,
      logout,
      updateUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// ─── Custom Hook untuk mengakses AuthContext ──────────────────
// Gunakan hook ini di komponen mana saja yang butuh data user atau fungsi auth.
// Contoh: const { user, isLoggedIn, logout } = useAuthContext();
export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext harus digunakan di dalam AuthProvider');
  }
  return context;
};

