import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface GalleryProps {
  language: Language;
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const t = TRANSLATIONS[language].gallery;

  // Updated images from user
  const images = [
    { 
      url: "https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740842671358-image.png", 
      span: "md:col-span-2 md:row-span-2", 
      color: "bg-brand-gold",
      alt: "Large Congregation Group"
    },
    { 
      url: "https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740842670067-image.png", 
      span: "md:col-span-1 md:row-span-1", 
      color: "bg-brand-blue",
      alt: "Pastoral Leadership"
    },
    { 
      url: "https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740842670368-image.png", 
      span: "md:col-span-1 md:row-span-2", 
      color: "bg-brand-rose",
      alt: "Church Choir"
    },
    { 
      url: "https://image-resource-service-130145399.us-central1.run.app/static/uploads/1740842670916-image.png", 
      span: "md:col-span-1 md:row-span-1", 
      color: "bg-brand-teal",
      alt: "Youth Fellowship"
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
       {/* Decorative elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light rounded-bl-full z-0"></div>
       <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-50 rounded-tr-full z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <span className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-2 block">Fellowship</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
                {t.title}
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-brand-gold to-brand-rose mx-auto rounded-full"></div>
            <p className="text-xl text-gray-500 mt-4">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {images.map((img, index) => (
            <div 
                key={index} 
                className={`${img.span} relative rounded-3xl overflow-hidden group shadow-lg border-4 border-white`}
            >
              <div className={`absolute inset-0 ${img.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
              <img 
                src={img.url} 
                alt={img.alt || `Gallery ${index}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                 <span className="bg-white text-brand-dark font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                    Berhane Wongel
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;