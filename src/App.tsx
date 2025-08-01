import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters, getLetterById } from './data/letters';
import LetterCard from './components/LetterCard';
import LetterModal from './components/LetterModal';
import ThemeToggle from './components/ThemeToggle';
import { Letter } from './types';
import './App.css';

function App() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle URL parameters for deep linking
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const letterId = urlParams.get('letter');
      if (letterId) {
        const letter = getLetterById(letterId);
        if (letter) {
          setSelectedLetter(letter);
          setIsModalOpen(true);
        }
      }
    } catch (error) {
      console.error('Error handling URL parameters:', error);
    }
  }, []);

  const handleLetterClick = (letter: Letter) => {
    try {
      setSelectedLetter(letter);
      setIsModalOpen(true);
      
      // Update URL for deep linking
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('letter', letter.id);
      window.history.pushState({}, '', newUrl.toString());
    } catch (error) {
      console.error('Error handling letter click:', error);
      // Fallback: just open the modal without URL update
      setSelectedLetter(letter);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    try {
      setIsModalOpen(false);
      setSelectedLetter(null);
      
      // Clear URL parameter
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('letter');
      window.history.pushState({}, '', newUrl.toString());
    } catch (error) {
      console.error('Error handling modal close:', error);
      // Fallback: just close the modal
      setIsModalOpen(false);
      setSelectedLetter(null);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-vintage dark:bg-gradient-to-br dark:from-vintage-950 dark:to-sepia-950 transition-all duration-500">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-vintage-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-sepia-400/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-bronze-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 bg-parchment-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        <div className="relative z-10">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center py-20 px-4 relative"
          >
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-vintage-600 via-bronze-500 to-sepia-600 rounded-full opacity-60"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mb-8"
            >
              <h1 className="text-7xl md:text-8xl font-heading font-bold text-vintage-900 dark:text-parchment-50 mb-6 tracking-wider relative italic">
                Open When Letters
                <div className="absolute -inset-2 bg-gradient-to-r from-vintage-400/20 to-bronze-400/20 blur-2xl rounded-3xl"></div>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl text-vintage-700 dark:text-parchment-300 max-w-3xl mx-auto leading-relaxed font-heading italic tracking-wide"
            >
              Open a letter when you need it most.
            </motion.p>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-sepia-600 via-bronze-500 to-vintage-600 rounded-full opacity-60"></div>
          </motion.header>

          {/* Letters Grid */}
          <motion.main 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-4 pb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {letters.map((letter) => (
                <LetterCard
                  key={letter.id}
                  letter={letter}
                  onClick={() => handleLetterClick(letter)}
                />
              ))}
            </div>
          </motion.main>

          {/* Footer */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center py-12 px-4 border-t border-vintage-300/50 dark:border-sepia-700/50 bg-vintage-50/50 dark:bg-vintage-900/30 backdrop-blur-sm"
          >
            <p className="text-vintage-700 dark:text-parchment-400 font-heading italic tracking-wider">
              Made with 💝 for moments when words matter most
            </p>
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
