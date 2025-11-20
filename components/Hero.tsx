
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2690&auto=format&fit=crop" 
          alt="Church Cross Background" 
          className="w-full h-full object-cover animate-scale-slow"
        />
        {/* Elegant Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/80"></div>
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Welcome Badge */}
        <div className="inline-block mb-8 animate-fade-in-up">
           <div className="px-8 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm shadow-lg">
             {t.welcome}
           </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 text-white drop-shadow-2xl animate-fade-in-up animation-delay-200">
          Berhane <span className="text-brand-gold italic">Wongel</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-sans font-light text-gray-200 mt-4 tracking-widest uppercase opacity-90">Dallas</span>
        </h1>
        
        {/* Subtitle */}
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-brand-gold rounded-full shadow-lg"></div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-400">
          {t.subtitle}
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center animate-fade-in-up animation-delay-600">
            <a
            href="https://www.youtube.com/@GospeLlightEritreanChurch"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-600/40 transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
               <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
               <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
               </svg>
               <span className="relative z-10">{t.watchOnline}</span>
            </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
