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
      <div className="min-h-screen relative overflow-hidden bg-gradient-vintage dark:bg-gradient-to-br dark:from-mahogany-950 dark:to-leather-950 transition-all duration-500">
        {/* Atmospheric background layers */}
        <div className="absolute inset-0 bg-warm-leather"></div>
        <div className="absolute inset-0 bg-tobacco-mist opacity-60"></div>
        
        {/* Floating vintage particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-16 w-24 h-24 bg-tobacco-300/25 rounded-full blur-2xl animate-drift"></div>
          <div className="absolute top-40 right-24 w-32 h-32 bg-leather-400/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-copper-400/15 rounded-full blur-2xl animate-mist" style={{animationDelay: '6s'}}></div>
          <div className="absolute bottom-16 right-32 w-36 h-36 bg-mahogany-300/18 rounded-full blur-3xl animate-float-slower" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-60 left-1/3 w-20 h-20 bg-sepia-200/30 rounded-full blur-xl animate-drift" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-bronze-300/25 rounded-full blur-lg animate-mist" style={{animationDelay: '2s'}}></div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Header */}
          <header className="text-center py-20 px-4">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-heading font-bold text-leather-800 dark:text-parchment-100 mb-6 tracking-wider italic drop-shadow-lg">
                Open When Letters
                <div className="absolute -inset-4 bg-gradient-to-r from-tobacco-200/40 via-leather-300/30 to-copper-200/40 blur-2xl rounded-3xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-tobacco-600 dark:text-sepia-300 max-w-3xl mx-auto leading-relaxed font-heading italic tracking-wide opacity-90">
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
          <footer className="text-center py-12 px-4 border-t border-tobacco-300/40 dark:border-mahogany-600/50 bg-parchment-50/60 dark:bg-leather-900/30 backdrop-blur-sm">
            <p className="text-tobacco-600 dark:text-sepia-400 font-heading italic tracking-wider">
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
