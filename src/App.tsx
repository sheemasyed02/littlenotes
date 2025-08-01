import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters, getLetterById } from './data/letters';
import LetterCard from './components/LetterCard';
import LetterModal from './components/LetterModal';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle URL parameters for deep linking
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const letterId = urlParams.get('letter');
    if (letterId) {
      const letter = getLetterById(letterId);
      if (letter) {
        setSelectedLetter(letter);
        setIsModalOpen(true);
      }
    }
  }, []);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);
    
    // Update URL for deep linking
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('letter', letter.id);
    window.history.pushState({}, '', newUrl);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLetter(null);
    
    // Clear URL parameter
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('letter');
    window.history.pushState({}, '', newUrl);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <ThemeToggle />
        
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Vintage floating elements */}
          <div className="floating-orb w-32 h-32 top-20 left-10" style={{animationDelay: '0s'}}></div>
          <div className="floating-orb w-48 h-48 bottom-20 right-10" style={{animationDelay: '3s'}}></div>
          <div className="floating-orb w-24 h-24 top-1/2 left-1/3" style={{animationDelay: '6s'}}></div>
          <div className="floating-orb w-40 h-40 top-1/3 right-1/4" style={{animationDelay: '1.5s'}}></div>
          
          {/* Vintage sparkle effects */}
          <div className="absolute top-10 left-20 w-2 h-2 bg-vintage-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-bronze-600 rounded-full animate-ping opacity-70" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 bg-sepia-500 rounded-full animate-ping opacity-50" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-60 w-1.5 h-1.5 bg-vintage-600 rounded-full animate-ping opacity-80" style={{animationDelay: '6s'}}></div>
          
          {/* Paper texture overlay */}
          <div className="absolute inset-0 vintage-paper-texture opacity-30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block relative">
                <div className="text-8xl md:text-9xl filter drop-shadow-lg">
                  <span className="inline-block transform hover:scale-110 transition-transform duration-300">📜</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-vintage-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gradient mb-8 tracking-wide italic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Open When Letters
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <p className="text-2xl md:text-3xl text-vintage-900 dark:text-parchment-100 font-heading max-w-4xl mx-auto leading-relaxed mb-4 italic font-medium tracking-wide">
                Open a letter when you need it most.
              </p>
              <p className="text-lg md:text-xl text-vintage-800/90 dark:text-parchment-200/90 max-w-3xl mx-auto font-heading leading-relaxed italic">
                ✨ Find comfort, strength, and hope in words written just for you ✨
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full border border-vintage-300/30 dark:border-sepia-600/30 ornamental-border">
                <span className="text-vintage-800 dark:text-parchment-200 text-sm font-medium tracking-wide font-heading italic">Choose your moment</span>
                <span className="text-vintage-700 text-xl animate-bounce">↓</span>
              </div>
            </motion.div>
          </motion.header>

          {/* Letters Grid */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="container mx-auto px-4 pb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {letters.map((letter, index) => (
                <LetterCard
                  key={letter.id}
                  letter={letter}
                  onClick={handleLetterClick}
                  index={index}
                />
              ))}
            </div>
          </motion.main>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center py-12 px-4"
          >
            <div className="max-w-md mx-auto">
              <div className="vintage-card rounded-2xl p-8 vintage-paper-texture">
                <p className="text-vintage-800 dark:text-parchment-200 font-heading text-sm leading-relaxed text-center font-medium tracking-wide italic">
                  <span className="text-xl">🕊️</span> Crafted with love for moments when words matter most <span className="text-xl">🤍</span>
                </p>
              </div>
            </div>
          </motion.footer>
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
