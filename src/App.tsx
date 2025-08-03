import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters } from './data/letters';
import LetterCard from './components/LetterCard';
import LetterModal from './components/LetterModal';
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
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:bg-gradient-to-br dark:from-amber-900 dark:to-orange-950 transition-all duration-500">
        {/* Simple vintage atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/20 to-orange-200/30 dark:from-transparent dark:via-amber-800/10 dark:to-orange-900/20"></div>
        
        {/* Simple floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-16 w-24 h-24 bg-amber-200/20 dark:bg-amber-700/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-24 w-32 h-32 bg-orange-200/15 dark:bg-orange-700/25 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-yellow-200/10 dark:bg-yellow-700/20 rounded-full blur-2xl animate-drift" style={{animationDelay: '6s'}}></div>
          <div className="absolute bottom-16 right-32 w-36 h-36 bg-amber-300/12 dark:bg-amber-600/18 rounded-full blur-3xl animate-float-slower" style={{animationDelay: '1.5s'}}></div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Simple Header */}
          <header className="text-center py-20 px-4">
            <h1 className="text-7xl md:text-8xl font-heading font-bold text-amber-900 dark:text-amber-100 mb-6 tracking-wider italic">
              Open When Letters
            </h1>
            <p className="text-2xl md:text-3xl text-amber-700 dark:text-amber-300 max-w-3xl mx-auto leading-relaxed font-heading italic tracking-wide opacity-90">
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
          <footer className="text-center py-12 px-4 border-t border-amber-300/40 dark:border-amber-700/50 bg-amber-50/60 dark:bg-amber-900/30">
            <p className="text-amber-700 dark:text-amber-300 font-heading italic tracking-wider">
              Made with care for moments when words matter most
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
