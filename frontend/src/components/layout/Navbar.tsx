import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <div className="hidden md:flex items-center gap-8">
            <Link to="/login" className="text-[#001734] font-medium text-[15px] hover:opacity-70 transition-opacity">
              Log In
            </Link>
            <Link 
              to="/upload" 
              className="bg-gradient-to-r from-[#001734] to-[#002C59] text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:opacity-90 transition-all shadow-md"
            >
              Upload CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#001734] p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col items-end gap-5 pt-4">
            <Link to="/login" className="text-[#001734] font-medium text-base px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors w-full text-right">
              Log In
            </Link>
            <div className="px-4 w-full flex justify-end">
              <Link to="/upload" className="w-full max-w-[200px] bg-gradient-to-r from-[#001734] to-[#002C59] text-white py-3.5 rounded-xl font-bold text-center shadow-lg hover:shadow-[#00173430] transition-all active:scale-95">
                Upload CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;





