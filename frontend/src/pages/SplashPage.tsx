import { useState, useEffect } from 'react'
import { SpiralAnimation } from '../components/ui/SpiralAnimation'

const SplashPage = ({ onFinish }: { onFinish: () => void }) => {
  const [textVisible, setTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  // Show text after animation loads
  useEffect(() => {
    // Partikel animasi dulu ~4.5 detik, baru text muncul
    const showTimer = setTimeout(() => {
      setTextVisible(true)
    }, 4500)

    // Auto fade-out setelah 9 detik
    const navTimer = setTimeout(() => {
      setFadeOut(true)
    }, 9000)

    // Masuk ke HomePage
    const finishTimer = setTimeout(() => {
      onFinish()
    }, 9800)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(navTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div 
      className={`fixed inset-0 w-full h-full overflow-hidden bg-white z-[9999] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Spiral Animation Background */}
      <div className="absolute inset-0">
        <SpiralAnimation bgColor="white" particleColor="#001734" />
      </div>

      {/* NextStep Text - Center */}
      <div 
        className={`
          absolute inset-0 flex flex-col items-center justify-center z-10
          transition-all duration-1000 ease-out
          ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <h1 
          className="text-[42px] md:text-[56px] font-bold text-[#001734] tracking-tight drop-shadow-sm"
          style={{ textShadow: '0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(255,255,255,0.7)' }}
        >
          NextStep
        </h1>
        <p 
          className={`
            text-[#001734] text-[14px] md:text-[16px] tracking-[0.15em] uppercase font-light mt-3
            transition-all duration-1000 delay-500
            ${textVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ textShadow: '0 0 30px rgba(255,255,255,0.9)' }}
        >
          Jalur cerdas menuju karier
        </p>
      </div>
    </div>
  )
}

export default SplashPage
