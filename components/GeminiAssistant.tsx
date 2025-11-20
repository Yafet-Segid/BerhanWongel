import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { generateResponse } from '../services/geminiService';

interface GeminiAssistantProps {
  language: Language;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ language }) => {
  const t = TRANSLATIONS[language].assistant;
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);
    
    const result = await generateResponse(query, language);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section id="assistant" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 shadow-2xl text-center text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-gold opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-4">{t.title}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {t.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                />
                <button
                  onClick={handleAsk}
                  disabled={isLoading || !query.trim()}
                  className="px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? t.loading : t.button}
                </button>
              </div>

              {response && (
                <div className="mt-6 bg-white/5 rounded-xl p-6 text-left border border-white/10 animate-fade-in">
                  <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">
                    {response}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;