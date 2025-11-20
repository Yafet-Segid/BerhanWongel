import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.services, href: "#services" },
    { name: t.gallery, href: "#gallery" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={(e) => handleScroll(e, "#home")}
          >
            <div className="h-10 w-10 bg-gradient-to-tr from-brand-orange to-brand-rose rounded-xl rotate-6 shadow-lg flex items-center justify-center text-white font-serif font-bold text-xl mr-3 hover:rotate-12 transition-transform duration-300">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-brand-dark leading-none tracking-tight">
                Berhane Wongel
              </span>
              <span className="text-brand-orange font-bold text-xs tracking-[0.2em] uppercase mt-1">Dallas</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-600 hover:text-brand-blue font-medium text-sm transition-colors relative group py-2 cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-rose rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'en' ? 'bg-white shadow text-brand-blue' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ti')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'ti' ? 'bg-white shadow text-brand-blue' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                ትግ
              </button>
            </div>

            {/* Donate Button */}
            <a
              href="#donate"
              onClick={(e) => handleScroll(e, "#donate")}
              className="bg-brand-rose hover:bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 animate-pulse cursor-pointer"
              style={{ animationDuration: '2s' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
              {t.donate}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-3">
             <div className="flex items-center bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-white shadow text-brand-blue' : 'text-gray-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ti')}
                className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'ti' ? 'bg-white shadow text-brand-blue' : 'text-gray-400'
                }`}
              >
                ትግ
              </button>
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-dark hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-down">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-600 hover:text-brand-blue hover:bg-blue-50 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href="#donate"
                onClick={(e) => handleScroll(e, "#donate")}
                className="block text-center w-full bg-brand-rose text-white px-4 py-3 rounded-xl text-lg font-bold shadow-md hover:bg-pink-600 transition-colors"
              >
                 ❤ {t.donate}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;