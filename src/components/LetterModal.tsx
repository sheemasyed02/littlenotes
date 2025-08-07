import React, { useEffect, useState } from 'react';
import { LetterModalProps } from '../types';
import { useTypewriter } from '../hooks/useTypewriter';

const LetterModal: React.FC<LetterModalProps> = ({ letter, isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState<'message' | 'quote' | 'reflection'>('message');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isOpen && letter) {
      setCurrentSection('message');
      setHasStarted(false);
      setTimeout(() => setHasStarted(true), 300);
    }
  }, [isOpen, letter]);

  const { displayText } = useTypewriter(
    letter && hasStarted ? letter.content[currentSection] : '',
    { speed: 40, delay: 100 }
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSection === 'message') setCurrentSection('quote');
        else if (currentSection === 'quote') setCurrentSection('reflection');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSection === 'reflection') setCurrentSection('quote');
        else if (currentSection === 'quote') setCurrentSection('message');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSection, onClose]);

  if (!isOpen || !letter) return null;

  const getSectionTitle = () => {
    switch (currentSection) {
      case 'message': return 'A Letter for You';
      case 'quote': return 'Words of Wisdom';
      case 'reflection': return 'A Moment to Reflect';
      default: return '';
    }
  };

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center p-4
      bg-black/60 backdrop-blur-sm
      transition-all duration-300 ease-out
      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}>
      <div className={`
        relative w-full max-w-4xl max-h-[90vh] 
        bg-gradient-to-br from-parchment-50 via-vintage-cream to-parchment-100 dark:from-vintage-dark-bg dark:via-vintage-dark-surface dark:to-vintage-dark-secondary
        rounded-lg shadow-2xl border-2 border-vintage-brown/30 dark:border-vintage-dark-gold/40
        overflow-hidden flex flex-col
        transform transition-all duration-300 ease-out
        ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
      `}>
        
        <div className="absolute inset-0 bg-vintage-paper opacity-10 dark:opacity-15 rounded-lg"></div>
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-vintage-brown/20 dark:bg-vintage-dark-gold/40 hover:bg-vintage-rust/30 dark:hover:bg-vintage-dark-gold/60 flex items-center justify-center text-vintage-ink dark:text-vintage-dark-text transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative px-8 py-8 border-b border-vintage-brown/20 dark:border-vintage-dark-gold/40 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-parchment-100/40 to-parchment-200/40 dark:from-vintage-dark-surface/50 dark:to-vintage-dark-accent/50"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-vintage-ink dark:text-vintage-dark-text mb-2 text-center vintage-text-shadow">
              {letter.title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-block px-4 py-2 bg-parchment-200/70 dark:bg-vintage-dark-accent/70 rounded text-sm font-medium text-vintage-brown dark:text-vintage-dark-gold capitalize tracking-wide border border-vintage-brown/20 dark:border-vintage-dark-gold/30">
                {letter.category}
              </span>
              <span className="text-vintage-brown dark:text-vintage-dark-gold font-heading italic">
                {getSectionTitle()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 px-8 py-6 overflow-y-scroll scrollbar-thin relative">
          <div className="prose prose-lg max-w-none">
            <div 
              key={`${currentSection}-${letter?.id}`}
              className="text-vintage-ink dark:text-vintage-dark-text leading-relaxed font-primary text-lg whitespace-pre-line"
            >
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-vintage-brown dark:bg-vintage-dark-gold ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 border-t border-vintage-brown/20 dark:border-vintage-dark-gold/40 bg-gradient-to-r from-parchment-100/60 to-parchment-200/60 dark:from-vintage-dark-surface/60 dark:to-vintage-dark-accent/60 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {(['message', 'quote', 'reflection'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    if (currentSection !== section) {
                      setHasStarted(false);
                      setCurrentSection(section);
                      setTimeout(() => setHasStarted(true), 50);
                    }
                  }}
                  className={`
                    px-6 py-3 rounded-lg text-sm font-heading transition-all duration-200 border-2 relative overflow-hidden
                    ${currentSection === section
                      ? 'bg-vintage-brown text-vintage-cream shadow-md border-vintage-brown dark:bg-vintage-dark-gold dark:text-vintage-dark-bg dark:border-vintage-dark-gold transform scale-[0.98]'
                      : 'bg-parchment-200/80 hover:bg-parchment-300/90 text-vintage-brown dark:bg-vintage-dark-accent/80 dark:hover:bg-vintage-dark-secondary/90 dark:text-vintage-dark-muted dark:hover:text-vintage-dark-text border-vintage-brown/30 dark:border-vintage-dark-gold/50 hover:border-vintage-brown/50 dark:hover:border-vintage-dark-gold/70 hover:shadow-sm'
                    }
                  `}
                >
                  {section === 'message' ? 'Letter' : section === 'quote' ? 'Quote' : 'Reflection'}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-vintage-brown dark:text-vintage-dark-muted font-heading">
              Press <kbd className="px-2 py-1 bg-parchment-200 dark:bg-vintage-dark-accent rounded text-xs border border-vintage-brown/20 dark:border-vintage-dark-gold/40">ESC</kbd> to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
