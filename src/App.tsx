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
      <div className="min-h-screen relative overflow-hidden bg-aged-paper dark:bg-vintage-dark transition-all duration-700">
        {/* Magical vintage atmosphere layers */}
        <div className="absolute inset-0 bg-vintage-magic dark:bg-sepia-dark opacity-60"></div>
        <div className="absolute inset-0 bg-tobacco-mist dark:bg-gradient-to-br dark:from-vintage-950/80 dark:to-sepia-950/60"></div>
        
        {/* Vintage magical particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Light theme particles */}
          <div className="dark:hidden">
            <div className="absolute top-20 left-16 w-32 h-32 bg-vintage-300/30 rounded-full blur-3xl animate-vintage-glow"></div>
            <div className="absolute top-40 right-24 w-40 h-40 bg-sepia-400/25 rounded-full blur-3xl animate-parchment-wave" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 left-20 w-36 h-36 bg-tobacco-300/20 rounded-full blur-2xl animate-sepia-breath" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-16 right-32 w-48 h-48 bg-parchment-300/25 rounded-full blur-3xl animate-vintage-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-60 left-1/3 w-24 h-24 bg-leather-200/35 rounded-full blur-xl animate-drift" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-mahogany-300/30 rounded-full blur-lg animate-mist" style={{animationDelay: '5s'}}></div>
          </div>
          
          {/* Dark theme particles */}
          <div className="hidden dark:block">
            <div className="absolute top-20 left-16 w-28 h-28 bg-vintage-600/40 rounded-full blur-2xl animate-vintage-glow"></div>
            <div className="absolute top-40 right-24 w-32 h-32 bg-sepia-700/35 rounded-full blur-3xl animate-parchment-wave" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 left-20 w-30 h-30 bg-tobacco-800/30 rounded-full blur-2xl animate-sepia-breath" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-16 right-32 w-36 h-36 bg-parchment-700/25 rounded-full blur-3xl animate-vintage-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-60 left-1/3 w-20 h-20 bg-leather-600/40 rounded-full blur-xl animate-drift" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-mahogany-600/35 rounded-full blur-lg animate-mist" style={{animationDelay: '5s'}}></div>
          </div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Vintage Header */}
          <header className="text-center py-20 px-4">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-heading font-bold text-vintage-800 dark:text-vintage-100 mb-6 tracking-wider italic drop-shadow-lg animate-vintage-glow">
                Open When Letters
                <div className="absolute -inset-6 bg-mystical-vintage opacity-30 blur-3xl rounded-3xl -z-10 animate-vintage-pulse"></div>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-sepia-600 dark:text-sepia-300 max-w-3xl mx-auto leading-relaxed font-heading italic tracking-wide opacity-90 animate-sepia-breath">
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
          <footer className="text-center py-12 px-4 border-t border-vintage-300/30 dark:border-vintage-700/40 bg-vintage-paper/70 dark:bg-vintage-dark/50 backdrop-blur-sm">
            <p className="text-sepia-700 dark:text-sepia-300 font-heading italic tracking-wider animate-sepia-breath">
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
