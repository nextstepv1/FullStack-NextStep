import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'
import RegisterForm from '../../components/auth/RegisterForm'
import type { LoginFormData } from '../../components/auth/LoginForm'
import type { RegisterFormData } from '../../components/auth/RegisterForm'
import loginBg from '../../assets/login/login/daftar-page.png'
import { useLanguage } from '../../context/LanguageContext'
// Import AuthContext untuk menyimpan sesi login user ke sessionStorage
import { useAuthContext } from '../../context/AuthContext'

const AuthPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { language, toggleLanguage } = useLanguage()
  // Hook untuk menyimpan data sesi user setelah berhasil login/register
  const { login } = useAuthContext()
  const [isRegister, setIsRegister] = useState(location.pathname === '/register')
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)

  const [mobileContentRegister, setMobileContentRegister] = useState(location.pathname === '/register')

  // Sync state when navigating directly via URL
  useEffect(() => {
    const isReg = location.pathname === '/register'
    setIsRegister(isReg)
    // If not animating, sync immediately
    if (!isAnimating) {
      setMobileContentRegister(isReg)
    }
  }, [location.pathname])

  // Handle the halfway swap for mobile layout
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setMobileContentRegister(isRegister)
      }, 350) // 350ms is exactly halfway through the 700ms animation
      return () => clearTimeout(timer)
    } else {
      setMobileContentRegister(isRegister)
    }
  }, [isRegister, isAnimating])

  const switchMode = (toRegister: boolean) => {
    if (isAnimating || toRegister === isRegister) return
    setIsAnimating(true)
    setIsRegister(toRegister)

    // Update URL without reload
    navigate(toRegister ? '/register' : '/login', { replace: true })

    // Animation done after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 700)
  }

  // ── Handler Login ────────────────────────────────────────────
  // TODO (Backend): Ganti setTimeout dengan: const res = await api.post('/api/auth/login', data)
  // Kemudian panggil: login({ name: res.data.user.name, email: res.data.user.email })
  const handleLogin = (data: LoginFormData) => {
    setIsLoginLoading(true)
    setTimeout(() => {
      setIsLoginLoading(false)

      // Simulasi: simpan data user ke sessionStorage via AuthContext
      // Nama diambil dari bagian sebelum '@' di email sebagai nama default
      const displayName = data.email.split('@')[0]
      login({
        name: displayName,
        email: data.email,
        cvFileName: 'CV_NextStep_User.pdf',
        cvUploadedAt: new Date().toISOString(),
        role: 'user',
      })

      // Redirect ke halaman dashboard setelah login berhasil
      navigate('/dashboard', { replace: true })
    }, 1500)
  }

  // ── Handler Register ─────────────────────────────────────────
  // TODO (Backend): Ganti setTimeout dengan: const res = await api.post('/api/auth/register', data)
  // Kemudian panggil: login({ name: res.data.user.name, email: res.data.user.email })
  const handleRegister = (data: RegisterFormData) => {
    setIsRegisterLoading(true)
    setTimeout(() => {
      setIsRegisterLoading(false)

      // Simulasi: simpan data user baru ke sessionStorage via AuthContext
      login({
        name: data.fullName,
        email: data.email,
        cvFileName: undefined, // User baru belum punya CV
        cvUploadedAt: undefined,
        role: 'user',
      })

      // Redirect ke halaman dashboard setelah register berhasil
      navigate('/dashboard', { replace: true })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden anim-page-enter bg-[#001734]">
      <style>
        {`
          @keyframes mobileSlideCover {
            0% { transform: translateY(0); }
            50% { transform: translateY(calc(-55vh)); }
            100% { transform: translateY(0); }
          }
          .mobile-slide-anim {
            animation: mobileSlideCover 0.7s cubic-bezier(0.65,0,0.35,1) forwards;
          }
        `}
      </style>

      {/* ================================================ */}
      {/*  MOBILE LAYOUT — hanya terlihat di < lg          */}
      {/* ================================================ */}
      <div className="lg:hidden flex flex-col min-h-screen bg-[#001734]">
        {/* Mobile Branding Panel */}
        <div className="relative overflow-hidden min-h-[55vh] flex flex-col">
          <img
            src={loginBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001734]/70" />

          <div className="relative z-10 flex flex-col flex-1 justify-between w-full p-6 pt-6 pb-12 sm:p-8 sm:pb-14">
            {/* Header */}
            <div className="flex items-center justify-between">
              {/* Left: Kembali + Language Toggle */}
              <div className="flex items-center gap-4">
                <Link
                  to={mobileContentRegister ? "/login" : "/"}
                  onClick={(e) => {
                    if (mobileContentRegister) {
                      e.preventDefault()
                      switchMode(false)
                    }
                  }}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
                  aria-label="Kembali"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="text-[13px] font-medium">{language === 'id' ? 'Kembali' : 'Back'}</span>
                </Link>

                {/* Language toggle — mobile */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-all"
                  aria-label="Toggle language"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-[12px] font-bold uppercase tracking-widest">{language}</span>
                </button>
              </div>

              {/* Right: Logo */}
              <Link to="/" className="text-white text-[20px] sm:text-[22px] font-bold tracking-tight">
                NextStep
              </Link>
            </div>

            {/* Tagline */}
            <div className="mt-auto transition-opacity duration-300">
              {mobileContentRegister ? (
                <>
                  <h2 className="text-white text-[22px] sm:text-[24px] font-medium leading-snug mb-3">
                    {language === 'id'
                      ? '"NextStep memberikan kejelasan terstruktur yang anda butuhkan untuk meningkatkan jalur karier anda."'
                      : '"NextStep gives you the structured clarity you need to advance your career path."'}
                  </h2>
                  <p className="text-white/60 text-[14px]">
                    © 2026 NextStep Capstone Project. All rights reserved.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-white text-[28px] sm:text-[32px] font-bold leading-[1.15] mb-4">
                    {language === 'id' ? (
                      <>Majukan karier<br />Anda dengan<br />NexStep</>
                    ) : (
                      <>Advance your career<br />with NexStep</>
                    )}
                  </h2>
                  <p className="text-white/60 text-[13px] sm:text-[14px] leading-relaxed max-w-[400px]">
                    {language === 'id'
                      ? 'Bergabunglah dengan platform yang dirancang untuk menemukan rekomendasi pekerjaan anda sesuai tren kerja saat ini.'
                      : 'Join the platform designed to match you with the best job opportunities based on current market trends.'}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Form Panel */}
        <div 
          className={`flex-1 flex items-start justify-center bg-white px-6 pt-10 pb-10 sm:pt-12 sm:pb-12 rounded-t-[32px] -mt-8 relative z-20 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] ${isAnimating ? 'mobile-slide-anim' : ''}`}
        >
          <div className={`w-full max-w-[420px] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
               // We make the form fade out slightly during the swap to hide the sudden content change,
               // but actually, just letting it swap at 50% is enough since it's sliding super fast.
               // Let's use an inline style to control opacity during animation if needed.
               // Actually, it's fine without opacity tricks if it happens exactly at the peak.
               style={{
                 transition: 'opacity 0.2s',
                 opacity: isAnimating ? (mobileContentRegister !== isRegister ? 0 : 0) : 1 // Keep simple, just swap
               }}
          >
            {mobileContentRegister ? (
              <div className="animate-fade-in">
                <h1 className="text-[26px] sm:text-[28px] font-bold text-[#001734] mb-2">
                    {language === 'id' ? 'Buat Akun' : 'Create Account'}
                  </h1>
                  <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                    {language === 'id' ? 'Mulailah perjalanan profesional Anda hari ini.' : 'Start your professional journey today.'}
                  </p>
                <RegisterForm onSubmit={handleRegister} isLoading={isRegisterLoading} switchToLogin={() => switchMode(false)} />
              </div>
            ) : (
              <div className="animate-fade-in">
                <h1 className="text-[26px] sm:text-[28px] font-bold text-[#001734] mb-2">
                    {language === 'id' ? 'Masuk' : 'Sign In'}
                  </h1>
                  <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                    {language === 'id' ? 'Masukkan kredensial Anda untuk mengakses akun Anda.' : 'Enter your credentials to access your account.'}
                  </p>
                <LoginForm onSubmit={handleLogin} isLoading={isLoginLoading} switchToRegister={() => switchMode(true)} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================================================ */}
      {/*  DESKTOP LAYOUT — hanya terlihat di >= lg         */}
      {/*  Menggunakan absolute positioning + CSS transform */}
      {/*  untuk animasi sliding panel                      */}
      {/* ================================================ */}
      <div className="hidden lg:block relative w-full min-h-screen">

        {/* ---- BRANDING PANEL (slides between left/right) ---- */}
        <div
          className="absolute top-0 bottom-0 w-[45%] z-30 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            left: isRegister ? '55%' : '0%',
          }}
        >
          <div className="relative overflow-hidden w-full h-full flex flex-col">
            <img
              src={loginBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#001734]/60" />

            <div className="relative z-10 flex flex-col flex-1 justify-between w-full p-12 pt-24 pb-12">
              {/* Header */}
              <div className="flex items-center justify-between">
              {/* Left: Kembali + Language Toggle */}
              <div className="flex items-center gap-4">
                <Link
                  to={isRegister ? "/login" : "/"}
                  onClick={(e) => {
                    if (isRegister) {
                      e.preventDefault()
                      switchMode(false)
                    }
                  }}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
                  aria-label="Kembali"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="text-[13px] font-medium">{language === 'id' ? 'Kembali' : 'Back'}</span>
                </Link>

                {/* Language toggle — desktop */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-all"
                  aria-label="Toggle language"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-[12px] font-bold uppercase tracking-widest">{language}</span>
                </button>
              </div>

              {/* Right: Logo */}
              <Link to="/" className="text-white text-[20px] sm:text-[22px] font-bold tracking-tight">
                NextStep
              </Link>
              </div>

              {/* Content switches based on mode */}
              <div className="mt-auto">
                {/* Login branding content */}
                <div
                  className="transition-all duration-500"
                  style={{
                    opacity: isRegister ? 0 : 1,
                    transform: isRegister ? 'translateY(20px)' : 'translateY(0)',
                    position: isRegister ? 'absolute' : 'relative',
                    bottom: isRegister ? '48px' : 'auto',
                    left: isRegister ? '48px' : 'auto',
                    right: isRegister ? '48px' : 'auto',
                    pointerEvents: isRegister ? 'none' : 'auto',
                  }}
                >
                  <h2 className="text-white text-[38px] font-bold leading-[1.15] mb-5">
                    {language === 'id' ? (
                      <>Majukan karier<br />Anda dengan<br />NexStep</>
                    ) : (
                      <>Advance your career<br />with NexStep</>
                    )}
                  </h2>
                  <p className="text-white/60 text-[14px] leading-relaxed max-w-[400px]">
                    {language === 'id'
                      ? 'Bergabunglah dengan platform yang dirancang untuk menemukan rekomendasi pekerjaan anda sesuai tren kerja saat ini.'
                      : 'Join the platform designed to match you with the best job opportunities based on current market trends.'}
                  </p>
                </div>

                {/* Register branding content */}
                <div
                  className="transition-all duration-500"
                  style={{
                    opacity: isRegister ? 1 : 0,
                    transform: isRegister ? 'translateY(0)' : 'translateY(20px)',
                    position: isRegister ? 'relative' : 'absolute',
                    bottom: isRegister ? 'auto' : '48px',
                    left: isRegister ? 'auto' : '48px',
                    right: isRegister ? 'auto' : '48px',
                    pointerEvents: isRegister ? 'auto' : 'none',
                  }}
                >
                  <h2 className="text-white text-[28px] font-medium leading-snug mb-3">
                    {language === 'id'
                      ? '"NextStep memberikan kejelasan terstruktur yang anda butuhkan untuk meningkatkan jalur karier anda."'
                      : '"NextStep gives you the structured clarity you need to advance your career path."'}
                  </h2>
                  <p className="text-white/60 text-[14px]">
                    © 2026 NextStep Capstone Project. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- FORM PANELS CONTAINER (behind branding) ---- */}
        <div className="absolute inset-0 flex w-full h-full">

          {/* LEFT FORM AREA — Register form lives here */}
          <div className="w-[55%] h-full flex items-center justify-center bg-white">
            <div
              className="w-full max-w-[420px] px-16 transition-all duration-500 delay-100"
              style={{
                opacity: isRegister ? 1 : 0,
                transform: isRegister ? 'translateX(0)' : 'translateX(-40px)',
                pointerEvents: isRegister ? 'auto' : 'none',
              }}
            >
              <h1 className="text-[32px] font-bold text-[#001734] mb-2">
                {language === 'id' ? 'Buat Akun' : 'Create Account'}
              </h1>
              <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                {language === 'id' ? 'Mulailah perjalanan profesional Anda hari ini.' : 'Start your professional journey today.'}
              </p>
              <RegisterForm onSubmit={handleRegister} isLoading={isRegisterLoading} switchToLogin={() => switchMode(false)} />
            </div>
          </div>

          {/* RIGHT FORM AREA — Login form lives here */}
          <div className="w-[55%] h-full flex items-center justify-center bg-white">
            <div
              className="w-full max-w-[420px] px-16 transition-all duration-500 delay-100"
              style={{
                opacity: isRegister ? 0 : 1,
                transform: isRegister ? 'translateX(40px)' : 'translateX(0)',
                pointerEvents: isRegister ? 'none' : 'auto',
              }}
            >
              <h1 className="text-[32px] font-bold text-[#001734] mb-2">
                {language === 'id' ? 'Masuk' : 'Sign In'}
              </h1>
              <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                {language === 'id' ? 'Masukkan kredensial Anda untuk mengakses akun Anda.' : 'Enter your credentials to access your account.'}
              </p>
              <LoginForm onSubmit={handleLogin} isLoading={isLoginLoading} switchToRegister={() => switchMode(true)} />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AuthPage
