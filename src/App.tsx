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
      <div className="min-h-screen relative overflow-hidden vintage-paper-texture">
        {/* Vintage parchment background */}
        <div className="absolute inset-0 bg-gradient-to-br from-parchment-50 via-parchment-100 to-parchment-200 dark:bg-gradient-to-br dark:from-vintage-dark-bg dark:via-vintage-dark-surface dark:to-vintage-dark-secondary transition-all duration-500"></div>
        
        {/* Subtle paper texture overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment-100/30 to-parchment-300/40 dark:from-transparent dark:via-vintage-dark-surface/30 dark:to-vintage-dark-accent/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-parchment-200/10 to-vintage-sepia/20 dark:from-transparent dark:via-vintage-dark-gold/15 dark:to-vintage-dark-surface/25"></div>
        
        {/* Subtle floating vintage particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-16 w-16 h-16 bg-parchment-200/10 dark:bg-vintage-dark-gold/20 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 bg-vintage-sepia/8 dark:bg-vintage-dark-text/15 rounded-full blur-2xl animate-drift" style={{animationDelay: '4s'}}></div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Vintage handwritten style header */}
          <header className="text-center py-20 px-4">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-vintage-ink dark:text-vintage-dark-text mb-6 tracking-wider italic vintage-text-shadow">
              If You Ever Feel...
            </h1>
            <p className="text-xl md:text-2xl text-vintage-brown dark:text-vintage-dark-muted max-w-2xl mx-auto leading-relaxed font-heading italic tracking-wide opacity-90">
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
          <footer className="text-center py-12 px-4 border-t border-vintage-brown/30 dark:border-vintage-dark-gold/50 bg-parchment-100/60 dark:bg-vintage-dark-surface/40">
            <p className="text-vintage-brown dark:text-vintage-dark-muted font-heading italic tracking-wider">
              Made with care for moments when words matter most :)
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

