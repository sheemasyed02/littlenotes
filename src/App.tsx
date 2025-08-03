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
        <div className="absolute inset-0 bg-gradient-to-br from-parchment-50 via-parchment-100 to-parchment-200 dark:bg-gradient-to-br dark:from-vintage-darkbrown dark:via-vintage-brown dark:to-parchment-800 transition-all duration-500"></div>
        
        {/* Subtle paper texture overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment-100/30 to-parchment-300/40 dark:from-transparent dark:via-vintage-brown/20 dark:to-parchment-700/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-parchment-200/10 to-vintage-sepia/20 dark:from-transparent dark:via-vintage-brown/10 dark:to-parchment-800/20"></div>
        
        {/* Floating vintage particles like paper dust */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-16 w-20 h-20 bg-parchment-200/15 dark:bg-vintage-brown/25 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-24 w-28 h-28 bg-vintage-sepia/12 dark:bg-vintage-gold/20 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-parchment-300/10 dark:bg-parchment-700/18 rounded-full blur-xl animate-drift" style={{animationDelay: '6s'}}></div>
          <div className="absolute bottom-16 right-32 w-32 h-32 bg-vintage-sepia/8 dark:bg-vintage-gold/15 rounded-full blur-2xl animate-float-slower" style={{animationDelay: '1.5s'}}></div>
        </div>

        <ThemeToggle />
        
        <div className="relative z-10">
          {/* Vintage handwritten style header */}
          <header className="text-center py-20 px-4">
            <h1 className="text-6xl md:text-7xl font-script font-normal text-vintage-ink dark:text-vintage-cream mb-6 tracking-wide transform -rotate-1 vintage-text-shadow">
              Open When Letters
            </h1>
            <p className="text-xl md:text-2xl text-vintage-brown dark:text-vintage-sepia max-w-2xl mx-auto leading-relaxed font-serif italic tracking-wide opacity-90">
              When words are needed most, open these letters...
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
          <footer className="text-center py-12 px-4 border-t border-vintage-brown/30 dark:border-vintage-gold/40 bg-parchment-100/60 dark:bg-vintage-brown/30">
            <p className="text-vintage-brown dark:text-vintage-sepia font-serif italic tracking-wider">
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
