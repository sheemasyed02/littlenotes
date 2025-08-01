import React, { useEffect, useState } from 'react';
import { LetterModalProps } from '../types';
import { useTypewriter } from '../hooks/useTypewriter';

const LetterModal: React.FC<LetterModalProps> = ({ letter, isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState<'message' | 'quote' | 'reflection'>('message');
  const [hasStarted, setHasStarted] = useState(false);

  // Reset when modal opens
  useEffect(() => {
    if (isOpen && letter) {
      setCurrentSection('message');
      setHasStarted(false);
      // Small delay to allow modal to appear before starting typewriter
      setTimeout(() => setHasStarted(true), 300);
    }
  }, [isOpen, letter]);

  const { displayText } = useTypewriter(
    letter ? letter.content[currentSection] : '',
    { speed: 50, delay: hasStarted ? 0 : 300 }
  );

  // Handle keyboard navigation
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
        bg-gradient-to-br from-parchment-50 to-vintage-100 
        dark:from-vintage-900 dark:to-sepia-900
        rounded-3xl shadow-2xl border-2 border-vintage-200/50
        overflow-hidden
        transform transition-all duration-300 ease-out
        ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
      `}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-vintage-200/80 hover:bg-vintage-300/80 dark:bg-vintage-700/80 dark:hover:bg-vintage-600/80 flex items-center justify-center text-vintage-800 dark:text-parchment-200 hover:text-vintage-900 dark:hover:text-parchment-100 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="relative px-8 py-8 border-b border-vintage-200/50 dark:border-vintage-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-vintage-200/30 to-sepia-200/30 dark:from-vintage-800/30 dark:to-sepia-800/30"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-vintage-900 dark:text-parchment-50 mb-2">
              {letter.title}
            </h2>
            <div className="flex items-center gap-4">
              <span className="inline-block px-4 py-2 bg-vintage-200/60 dark:bg-vintage-700/60 rounded-full text-sm font-medium text-vintage-800 dark:text-parchment-200 capitalize">
                {letter.category}
              </span>
              <span className="text-vintage-600 dark:text-parchment-400 font-heading italic">
                {getSectionTitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-lg prose-vintage dark:prose-invert max-w-none">
            <div className="text-vintage-800 dark:text-parchment-200 leading-relaxed font-serif text-lg whitespace-pre-line">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-vintage-600 dark:bg-parchment-400 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-8 py-6 border-t border-vintage-200/50 dark:border-vintage-700/50 bg-gradient-to-r from-vintage-50/50 to-sepia-50/50 dark:from-vintage-950/50 dark:to-sepia-950/50">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {(['message', 'quote', 'reflection'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setCurrentSection(section);
                    setHasStarted(true);
                  }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${currentSection === section
                      ? 'bg-vintage-600 text-parchment-50 shadow-lg'
                      : 'bg-vintage-200/60 hover:bg-vintage-300/60 text-vintage-800 dark:bg-vintage-700/60 dark:hover:bg-vintage-600/60 dark:text-parchment-200'
                    }
                  `}
                >
                  {section === 'message' ? 'Letter' : section === 'quote' ? 'Quote' : 'Reflection'}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-vintage-600 dark:text-parchment-400 font-heading">
              Press <kbd className="px-2 py-1 bg-vintage-200 dark:bg-vintage-700 rounded text-xs">ESC</kbd> to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterModal;
