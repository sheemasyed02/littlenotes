import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters } from './data/letters';
import LetterCard from './components/LetterCard-noframer';
import LetterModal from './components/LetterModal-noframer';
import ThemeToggle from './components/ThemeToggle';
import { Letter } from './types';

function App() {
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
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-vintage-50 via-parchment-100 to-sepia-200 dark:bg-gradient-to-br dark:from-vintage-950 dark:to-sepia-950 transition-all duration-500">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-vintage-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-sepia-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-bronze-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 bg-parchment-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Header */}
          <header className="text-center py-20 px-4">
            <h1 className="text-7xl md:text-8xl font-heading font-bold text-vintage-900 dark:text-parchment-50 mb-6 tracking-wider italic">
              Open When Letters
            </h1>
            <p className="text-2xl md:text-3xl text-vintage-700 dark:text-parchment-300 max-w-3xl mx-auto leading-relaxed font-heading italic tracking-wide">
              Open a letter when you need it most.
            </p>
          </header>

          {/* Letters Grid */}
          <main className="px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {letters.map((letter) => (
                <LetterCard
                  key={letter.id}
                  letter={letter}
                  onClick={handleLetterClick}
                />
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="text-center py-12 px-4 border-t border-vintage-300/50 dark:border-sepia-700/50 bg-vintage-50/50 dark:bg-vintage-900/30 backdrop-blur-sm">
            <p className="text-vintage-700 dark:text-parchment-400 font-heading italic tracking-wider">
              Made with 💝 for moments when words matter most
            </p>
          </footer>
        </div>

        {/* Letter Modal */}
        <LetterModal
          letter={selectedLetter}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
