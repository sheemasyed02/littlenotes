import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters } from './data/letters';
import { Letter } from './types';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  console.log('App rendering, letters:', letters);
  
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLetterClick = (letter: Letter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLetter(null);
  };
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-vintage-50 dark:bg-vintage-950 p-8 font-serif transition-colors duration-500">
        <ThemeToggle />
        
        <div className="max-w-7xl mx-auto">
          <header className="text-center py-12 mb-16">
            <h1 className="text-6xl font-bold text-vintage-900 dark:text-parchment-50 mb-6 font-heading italic">
              Open When Letters
            </h1>
            
            <p className="text-2xl text-vintage-700 dark:text-parchment-300 max-w-2xl mx-auto leading-relaxed font-heading italic">
              Open a letter when you need it most.
            </p>
          </header>
          
          <main className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {letters.map((letter) => (
                <div 
                  key={letter.id}
                  className="magical-border cursor-pointer group p-8 h-full relative overflow-hidden ornate-corners hover:scale-105 transition-all duration-300"
                  onClick={() => handleLetterClick(letter)}
                >
                  <div className="flex flex-col h-full relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${letter.gradient} mb-4 flex items-center justify-center shadow-vintage`}>
                        <div className="w-10 h-10 bg-parchment-50 rounded-xl opacity-95 flex items-center justify-center shadow-inner">
                          <span className="text-2xl filter drop-shadow-sm">📜</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-vintage-900 dark:text-parchment-50 mb-6 leading-relaxed italic">
                      {letter.title}
                    </h3>
                    
                    {/* Category tag */}
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${letter.gradient} text-white shadow-vintage border border-white/20 italic`}>
                        {letter.category}
                      </span>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-sm font-semibold text-vintage-700 dark:text-parchment-400 hover:text-vintage-800 dark:hover:text-parchment-200 transition-colors">
                        <span className="tracking-wider font-heading italic">Open letter</span>
                        <span className="ml-3">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          
          <footer className="text-center py-12 border-t border-vintage-300/50 dark:border-sepia-700/50 bg-vintage-50/50 dark:bg-vintage-900/30">
            <p className="text-vintage-700 dark:text-parchment-400 font-heading italic tracking-wider">
              Made with 💝 for moments when words matter most
            </p>
          </footer>
        </div>

        {/* Modal */}
        {isModalOpen && selectedLetter && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
            <div className="bg-vintage-50 dark:bg-vintage-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto magical-border" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-vintage-900 dark:text-parchment-50 font-heading italic">{selectedLetter.title}</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-vintage-600 dark:text-parchment-400 hover:text-vintage-800 dark:hover:text-parchment-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="prose prose-vintage max-w-none">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-vintage-800 dark:text-parchment-200 mb-3 font-heading italic">Message</h3>
                  <p className="text-vintage-700 dark:text-parchment-300 leading-relaxed whitespace-pre-line italic">
                    {selectedLetter.content.message}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-vintage-800 dark:text-parchment-200 mb-3 font-heading italic">Quote</h3>
                  <blockquote className="text-vintage-700 dark:text-parchment-300 italic border-l-4 border-vintage-400 pl-4">
                    {selectedLetter.content.quote}
                  </blockquote>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-vintage-800 dark:text-parchment-200 mb-3 font-heading italic">Reflection</h3>
                  <p className="text-vintage-700 dark:text-parchment-300 leading-relaxed italic">
                    {selectedLetter.content.reflection}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
