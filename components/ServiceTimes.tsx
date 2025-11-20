import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServiceTimesProps {
  language: Language;
}

const ServiceTimes: React.FC<ServiceTimesProps> = ({ language }) => {
  const t = TRANSLATIONS[language].services;

  return (
    <section id="services" className="py-24 bg-brand-light relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-20">
          <span className="text-brand-rose font-bold tracking-widest uppercase text-sm bg-pink-100 px-4 py-1 rounded-full mb-4 inline-block shadow-sm">
             {t.title}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6">
            Weekly Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Sunday Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* Tigrinya Service */}
          <div className="group relative bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-brand-gold">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
               <div className="flex justify-between items-start mb-6">
                 <div className="bg-orange-100 p-3 rounded-2xl text-brand-orange">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                 </div>
                 <span className="bg-brand-gold text-white px-4 py-1 rounded-full font-bold text-sm shadow-md">Tigrinya</span>
               </div>
               
               <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">{t.tigrinyaTitle}</h3>
               <p className="text-gray-500 mb-8">{t.tigrinyaDesc}</p>
               
               <div className="mt-auto bg-brand-light rounded-2xl p-6 border border-orange-100">
                 <div className="flex items-center text-brand-dark font-bold text-xl">
                    <svg className="w-6 h-6 mr-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.time}
                 </div>
                 <div className="flex items-center text-gray-500 mt-2 ml-9">
                    Sunday Morning
                 </div>
               </div>
            </div>
          </div>

          {/* English Service */}
          <div className="group relative bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-brand-blue">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
               <div className="flex justify-between items-start mb-6">
                 <div className="bg-blue-100 p-3 rounded-2xl text-brand-blue">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                 </div>
                 <span className="bg-brand-blue text-white px-4 py-1 rounded-full font-bold text-sm shadow-md">English</span>
               </div>
               
               <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">{t.englishTitle}</h3>
               <p className="text-gray-500 mb-8">{t.englishDesc}</p>
               
               <div className="mt-auto bg-brand-light rounded-2xl p-6 border border-blue-100">
                 <div className="flex items-center text-brand-dark font-bold text-xl">
                    <svg className="w-6 h-6 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.time}
                 </div>
                 <div className="flex items-center text-gray-500 mt-2 ml-9">
                    Sunday Morning
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-8 text-center">
                {t.moreServicesTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Sunday Morning Prayer */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal mb-4">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">{t.sundayPrayerTitle}</h4>
                    <p className="text-brand-teal font-bold text-sm">{t.sundayPrayerTime}</p>
                </div>

                {/* Friday Teaching */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple mb-4">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">{t.fridayTitle}</h4>
                    <p className="text-brand-purple font-bold text-sm">{t.fridayTime}</p>
                </div>

                {/* Night Prayer */}
                <div className="bg-brand-dark p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 text-white">
                    <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold mb-4">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{t.nightPrayerTitle}</h4>
                    <p className="text-gray-400 text-xs mb-2">{t.nightPrayerDesc}</p>
                    <p className="text-brand-gold font-bold text-sm">{t.nightPrayerTime}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;