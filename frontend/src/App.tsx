import { useState } from 'react'
import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashPage onFinish={() => setShowSplash(false)} />}
      <HomePage />
    </>
  )
}

export default App