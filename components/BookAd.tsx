
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface BookAdProps {
  language: Language;
}

const BookAd: React.FC<BookAdProps> = ({ language }) => {
  const t = TRANSLATIONS[language].bookAd;

  return (
    <section className="py-8 relative overflow-hidden bg-brand-dark text-white">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-dark via-[#0f172a] to-[#1e293b]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Compact Title */}
        <div className="text-center mb-6">
             <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-gold tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(255,183,3,0.3)]">
               {t.newRelease}
             </h2>
        </div>

        {/* Main Card - Compact Banner Style */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col-reverse md:flex-row min-h-[300px] border border-gray-100">
          
          {/* Left Side: Details (Text) */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-start text-left bg-white text-gray-900 relative">
             
             <div className="mb-4 w-full relative z-10">
                <p className="text-brand-blue font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-blue"></span>
                  {t.author}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-brand-dark mb-2 leading-tight">
                  ድምጺ ኣምላኽ
                </h3>
                <p className="text-base md:text-lg text-gray-500 font-serif italic">
                   {t.title} : {t.subtitle}
                </p>
             </div>

             <div className="flex items-center gap-4 mb-5">
                <div className="bg-gray-50 text-gray-600 px-4 py-1.5 rounded-lg font-bold text-xs md:text-sm flex items-center gap-2 border border-gray-100">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t.date}
                </div>
             </div>

             <div className="w-full">
                <a 
                  href="mailto:Gospellightfinance@gmail.com" 
                  className="group inline-flex items-center justify-center w-full md:w-auto bg-brand-dark hover:bg-brand-blue text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5 gap-2 text-sm md:text-base"
                >
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                   {t.buttonText}
                </a>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide mt-2 ml-1">
                  {t.contactLabel}
                </p>
             </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 relative h-[200px] md:h-auto bg-gray-50">
            <img 
              src="https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740843335219-image.png" 
              alt="Book Release - The Voice of God" 
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay for blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookAd;