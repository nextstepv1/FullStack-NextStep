import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../../components/auth/LoginForm'
import RegisterForm from '../../components/auth/RegisterForm'
import type { LoginFormData } from '../../components/auth/LoginForm'
import type { RegisterFormData } from '../../components/auth/RegisterForm'
import loginBg from '../../assets/login/login/daftar-page.png'

const AuthPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
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

  const handleLogin = (data: LoginFormData) => {
    setIsLoginLoading(true)
    console.log('[AuthPage] Attempting login with:', { email: data.email })
    setTimeout(() => {
      setIsLoginLoading(false)
      // TODO: Integrasi dengan backend API endpoint /api/auth/login
    }, 1500)
  }

  const handleRegister = (data: RegisterFormData) => {
    setIsRegisterLoading(true)
    console.log('[AuthPage] Attempting register with:', { email: data.email, name: data.fullName })
    setTimeout(() => {
      setIsRegisterLoading(false)
      // TODO: Integrasi dengan backend API endpoint /api/auth/register
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
                <span className="text-[13px] font-medium">Kembali</span>
              </Link>
              <Link to="/" className="text-white text-[20px] sm:text-[22px] font-bold tracking-tight">
                NextStep
              </Link>
            </div>

            {/* Tagline */}
            <div className="mt-auto transition-opacity duration-300">
              {mobileContentRegister ? (
                <>
                  <h2 className="text-white text-[22px] sm:text-[24px] font-medium leading-snug mb-3">
                    "NextStep memberikan kejelasan terstruktur yang anda butuhkan untuk meningkatkan jalur karier anda."
                  </h2>
                  <p className="text-white/60 text-[14px]">
                    © 2026 NextStep Capstone Project. All rights reserved.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-white text-[28px] sm:text-[32px] font-bold leading-[1.15] mb-4">
                    Majukan karier<br />Anda dengan<br />NexStep
                  </h2>
                  <p className="text-white/60 text-[13px] sm:text-[14px] leading-relaxed max-w-[400px]">
                    Bergabunglah dengan platform yang dirancang
                    untuk menemukan rekomendasi pekerjaan anda sesuai
                    tren kerja saat ini.
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
                <h1 className="text-[26px] sm:text-[28px] font-bold text-[#001734] mb-2">Buat Akun</h1>
                <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                  Mulailah perjalanan profesional Anda hari ini.
                </p>
                <RegisterForm onSubmit={handleRegister} isLoading={isRegisterLoading} switchToLogin={() => switchMode(false)} />
              </div>
            ) : (
              <div className="animate-fade-in">
                <h1 className="text-[26px] sm:text-[28px] font-bold text-[#001734] mb-2">Sign in</h1>
                <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                  Masukkan kredensial Anda untuk mengakses akun Anda.
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
                  <span className="text-[13px] font-medium">Kembali</span>
                </Link>
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
                    Majukan karier<br />Anda dengan<br />NexStep
                  </h2>
                  <p className="text-white/60 text-[14px] leading-relaxed max-w-[400px]">
                    Bergabunglah dengan platform yang dirancang
                    untuk menemukan rekomendasi pekerjaan anda sesuai
                    tren kerja saat ini.
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
                    "NextStep memberikan kejelasan terstruktur yang anda butuhkan untuk meningkatkan jalur karier anda."
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
              <h1 className="text-[32px] font-bold text-[#001734] mb-2">Buat Akun</h1>
              <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                Mulailah perjalanan profesional Anda hari ini.
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
              <h1 className="text-[32px] font-bold text-[#001734] mb-2">Sign in</h1>
              <p className="text-[#495057] text-[14px] mb-8 leading-relaxed">
                Masukkan kredensial Anda untuk mengakses akun Anda.
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
