
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceTimes from './components/ServiceTimes';
import Gallery from './components/Gallery';
import Pastor from './components/Pastor';
import BookAd from './components/BookAd';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[language];

  const handleCopy = () => {
    navigator.clipboard.writeText(t.donate.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <Hero language={language} />
        
        <section id="about" className="py-24 bg-white relative overflow-hidden">
           <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
           
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <Reveal>
                <span className="text-brand-rose font-bold tracking-widest uppercase text-sm mb-4 block">
                    {language === 'en' ? 'Who We Are' : 'ንሕና መን ኢና'}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8">
                {language === 'en' ? "About Our Church" : "ብዛዕባ ቤተ ክርስቲያንና"}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                {language === 'en' 
                    ? "Berhane Wongel Dallas is a vibrant Eritrean church community. We are dedicated to worship, fellowship, and the study of God's Word. Whether you speak English or Tigrinya, there is a place for you here to grow in faith and serve the community."
                    : "ብርሃነ ወንጌል ዳላስ ህያው ኤርትራዊት ቤተ ክርስቲያን እያ። ንኣምልኾ፡ ንሕብረትን ንመጽናዕቲ ቃል ኣምላኽን ዝተወፈና ኢና። ቋንቋ እንግሊዝ ወይ ትግርኛ ትዛረቡ ብዘየገድስ፡ ኣብዚ እምነትኩም እተዕብይሉን ንማሕበረሰብ እተገልግልሉን ቦታ ኣለኩም።"}
                </p>
             </Reveal>
          </div>
        </section>

        <Reveal>
           <Pastor language={language} />
        </Reveal>

        <Reveal delay={200}>
            <BookAd language={language} />
        </Reveal>

        <Reveal>
            <ServiceTimes language={language} />
        </Reveal>

        <Reveal>
            <Gallery language={language} />
        </Reveal>
        
        {/* Donate Section */}
        <section id="donate" className="py-24 bg-brand-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-purple-900 to-brand-blue opacity-90"></div>
            
            {/* Abstract shapes */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-gold/20 rounded-full blur-xl"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
                <Reveal>
                    <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
                        <span className="text-4xl">♥</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        {t.donate.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
                        {t.donate.subtitle}
                    </p>
                    
                    <div className="inline-block bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-lg w-full transform transition-all hover:bg-white/15">
                    <p className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">{t.donate.zelleLabel}</p>
                    
                    <button 
                        onClick={handleCopy}
                        className="group w-full bg-white text-brand-dark p-4 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors relative overflow-hidden"
                    >
                        <span className="font-mono text-sm md:text-lg font-bold truncate mr-2 select-all">
                        {t.donate.email}
                        </span>
                        <div className="bg-brand-rose text-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                        {copied ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        )}
                        </div>
                        {/* Feedback Toast */}
                        <div className={`absolute inset-0 bg-green-500 flex items-center justify-center transition-transform duration-300 ${copied ? 'translate-y-0' : 'translate-y-full'}`}>
                            <span className="text-white font-bold">{t.donate.copiedText}</span>
                        </div>
                    </button>
                    <p className="text-xs text-gray-400 mt-3">{t.donate.copyText}</p>
                    </div>
                </Reveal>
            </div>
        </section>

      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;