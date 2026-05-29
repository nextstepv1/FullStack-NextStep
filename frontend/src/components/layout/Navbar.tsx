import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isUploadPage = location.pathname === '/upload';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50 py-1' 
          : 'bg-white border-b border-gray-100 py-0'
      }`}
    >
      <div className="content-container">
        <nav className="flex justify-between items-center h-16 lg:h-20 transition-all duration-300" aria-label="Main Navigation">
          
          {/* Logo */}
          <Link to="/" className="text-xl lg:text-2xl font-bold text-[#001734] tracking-tight">
            NextStep
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Globe Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-[#001734] hover:opacity-70 transition-all text-[15px] font-bold select-none cursor-pointer duration-300"
              title={language === 'en' ? 'Ubah ke Bahasa Indonesia' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <svg 
                className="w-5 h-5 text-[#001734] transition-transform duration-500 hover:rotate-45" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="tracking-wide uppercase text-[15px]">{language}</span>
            </button>

            <Link to="/login" className="text-[#001734] font-medium text-[15px] hover:opacity-70 transition-opacity">
              {t.navLogin}
            </Link>
            {!isUploadPage && (
              <Link
                to="/upload"
                className="bg-gradient-to-r from-[#001734] to-[#002C59] text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:opacity-90 transition-all shadow-md"
              >
                {t.navUploadCV}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button — animated pill */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-all duration-300 shadow-md ${
              isMenuOpen
                ? 'bg-[#002C59]'
                : 'bg-[#001734] hover:bg-[#00224d]'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Animated bars */}
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 bg-white ${
              isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 mt-1.5 bg-white ${
              isMenuOpen ? 'opacity-0 scale-x-0' : ''
            }`} />
            <span className={`block h-[2px] w-5 rounded-full transition-all duration-300 mt-1.5 bg-white ${
              isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`} />
          </button>
        </nav>

        {/* Mobile Drawer — premium slide-down panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-1 mb-4 bg-gradient-to-br from-[#001734] to-[#002C59] rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col px-5 py-5 gap-1">

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/10 px-3 py-3 rounded-xl transition-all duration-200 font-semibold text-[14px] w-full"
                aria-label="Toggle language"
              >
                <svg className="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="uppercase tracking-widest text-[13px]">{language}</span>
              </button>

              {/* Divider */}
              <div className="h-px bg-white/10 my-1" />

              {/* Login */}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 px-3 py-3 rounded-xl transition-all duration-200 font-semibold text-[14px] w-full"
              >
                <svg className="w-4.5 h-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t.navLogin}
              </Link>

              {/* Upload CV — hidden on /upload page */}
              {!isUploadPage && (
                <Link
                  to="/upload"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 mt-1 bg-white text-[#001734] py-3 rounded-xl font-bold text-[14px] text-center shadow-md hover:bg-[#EEF3FF] transition-all active:scale-95"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {t.navUploadCV}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





