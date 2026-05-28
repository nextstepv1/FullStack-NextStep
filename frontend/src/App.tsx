import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/auth/AuthPage'
import SplashPage from './pages/SplashPage'

function App() {
  const [showSplash, setShowSplash] = useState(() => window.location.pathname === '/')

  return (
    <>
      {showSplash && <SplashPage onFinish={() => setShowSplash(false)} />}
      
      {/* 
        Sembunyikan konten utama selama splash screen aktif 
        agar tidak terjadi layout shift atau interaksi yang tidak diinginkan
      */}
      <div className={showSplash ? 'hidden' : 'block'}>
        <BrowserRouter>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Auth Routes */}
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App