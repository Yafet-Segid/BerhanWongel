import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface PastorProps {
  language: Language;
}

const Pastor: React.FC<PastorProps> = ({ language }) => {
  const t = TRANSLATIONS[language].pastor;

  return (
    <section className="py-20 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-bl-full -mr-16 -mt-16"></div>
          
          {/* Image side */}
          <div className="w-full md:w-1/3 flex justify-center relative z-10">
             <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-8 border-white shadow-2xl overflow-hidden relative bg-brand-dark group">
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                {/* Updated Pastor Image */}
                <img 
                  src="https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740843919403-image.png" 
                  alt="Pastor Biniam Asefaw" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="absolute bottom-4 right-4 bg-brand-rose text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3 z-20">
                Senior Pastor
             </div>
          </div>

          {/* Content side */}
          <div className="w-full md:w-2/3 text-center md:text-left relative z-10">
            <h3 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">{t.title}</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">{t.name}</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {t.description}
            </p>
            
            <a 
              href="https://www.youtube.com/@GospeLlightEritreanChurch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              {t.watchSermons}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pastor;