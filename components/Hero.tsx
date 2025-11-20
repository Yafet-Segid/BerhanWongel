
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-dark via-purple-900 to-blue-900 animate-gradient-xy opacity-90"></div>
      
      {/* Abstract Light Particles/Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Welcome Badge */}
        <div className="inline-block mb-8 animate-fade-in-up">
           <div className="px-8 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm shadow-lg ring-1 ring-white/20">
             {t.welcome}
           </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6 text-white drop-shadow-2xl animate-fade-in-up animation-delay-200">
          Berhane <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 italic">Wongel</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-sans font-light text-gray-200 mt-4 tracking-widest uppercase opacity-90">Dallas</span>
        </h1>
        
        {/* Subtitle */}
        <div className="flex justify-center mb-10">
          <div className="h-1 w-24 bg-brand-gold/80 rounded-full shadow-[0_0_15px_rgba(255,183,3,0.5)]"></div>
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
            className="group relative bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.5)] transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden border border-red-500/50"
            >
               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
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
