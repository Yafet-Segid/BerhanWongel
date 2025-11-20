import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-brand-gold">Berhane Wongel Dallas</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
               Gospel Light Eritrean Baptist Church. A community of believers dedicated to spreading the light of the Gospel in Dallas.
            </p>
          </div>
          
          {/* Column 2: Contact & Info */}
          <div>
             <h3 className="text-lg font-bold font-serif text-white mb-6 border-b border-gray-800 pb-2 inline-block">{t.contact}</h3>
             <div className="space-y-4">
               {/* Address */}
               <div className="flex items-start">
                  <svg className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("11110 Garland Rd, Dallas, TX 75218")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {t.address}
                  </a>
               </div>

               {/* Phone */}
               <div className="flex items-center">
                  <svg className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:2143275700" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {t.phone}
                  </a>
               </div>

               {/* Hours */}
               <div className="flex items-start pt-2">
                  <svg className="w-5 h-5 text-brand-gold mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-400">
                    <p className="text-white font-medium mb-1 text-xs uppercase tracking-wide">{t.hoursTitle}</p>
                    <p>{t.weekdays}</p>
                    <p>{t.sunday}</p>
                    <p className="text-gray-500 italic">{t.closed}</p>
                  </div>
               </div>
             </div>
          </div>

           {/* Column 3: Socials */}
           <div>
             <h3 className="text-lg font-bold font-serif text-white mb-6 border-b border-gray-800 pb-2 inline-block">{t.connect}</h3>
             <div className="flex space-x-4">
               {/* Facebook Placeholder */}
               <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-brand-blue transition-all duration-300">
                 <span className="sr-only">Facebook</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
               </a>
               
               {/* YouTube Link */}
               <a href="https://www.youtube.com/@GospeLlightEritreanChurch" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300">
                 <span className="sr-only">YouTube</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.254.418-4.814a2.506 2.506 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/></svg>
               </a>

               {/* Instagram Placeholder */}
               <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300">
                 <span className="sr-only">Instagram</span>
                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0 2.163a8.003 8.003 0 00-4.043.06 3.204 3.204 0 00-1.834.94 3.204 3.204 0 00-.94 1.834c-.052 1.132-.06 1.474-.06 4.366 0 2.892.008 3.234.06 4.366.043.938.212 1.564.487 2.233a2.742 2.742 0 001.575 1.575c.67.275 1.296.444 2.233.487 1.132.052 1.474.06 4.366.06 2.892 0 3.234-.008 4.366-.06.938-.043 1.564-.212 2.233-.487a2.742 2.742 0 001.575-1.575c.275-.67.444-1.296.487-2.233.052-1.132.06-1.474.06-4.366 0-2.892-.008-3.234-.06-4.366-.043-.938-.212-1.564-.487-2.233a2.742 2.742 0 00-1.575-1.575c-.67-.275-1.296-.444-2.233-.487-1.132-.052-1.474-.06-4.366-.06zm0 5.27a2.73 2.73 0 110 5.46 2.73 2.73 0 010-5.46zm0 1.62a1.11 1.11 0 100 2.22 1.11 1.11 0 000-2.22zm5.23-4.88a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z" clipRule="evenodd"/></svg>
               </a>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;