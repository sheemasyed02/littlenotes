import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const LetterModal = ({ letter, isOpen, onClose }) => {
  const [currentSection, setCurrentSection] = useState('message');
  const [hasStartedReading, setHasStartedReading] = useState(false);
  
  const { displayText: messageText, isComplete: messageComplete } = useTypewriter(
    hasStartedReading ? letter?.content?.message || '' : '',
    45,
    1000
  );
  
  const { displayText: quoteText, isComplete: quoteComplete } = useTypewriter(
    currentSection === 'quote' ? letter?.content?.quote || '' : '',
    55,
    500
  );
  
  const { displayText: reflectionText } = useTypewriter(
    currentSection === 'reflection' ? letter?.content?.reflection || '' : '',
    45,
    500
  );

  useEffect(() => {
    if (isOpen && letter) {
      setHasStartedReading(true);
      setCurrentSection('message');
    } else {
      setHasStartedReading(false);
    }
  }, [isOpen, letter]);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  if (!letter) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 137, 56, 0.15) 0%, rgba(0, 0, 0, 0.75) 70%)'
          }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-white dark:bg-vintage-950 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
            style={{
              background: 'radial-gradient(circle at 25% 25%, #fefcf7 0%, #fcf8eb 25%, #f8f0d1 50%, #f2e4ad 100%)',
              backdropFilter: 'blur(20px)',
              border: '3px solid rgba(234, 212, 130, 0.4)'
            }}
          >
            {/* Decorative vintage elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-vintage-400/20 to-bronze-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-sepia-400/15 to-parchment-400/15 rounded-full blur-lg"></div>
            
            {/* Header */}
            <div className={`relative overflow-hidden`}>
              <div 
                className="p-10 text-white relative"
                style={{
                  background: `linear-gradient(135deg, ${letter.gradient.includes('purple') ? '#d68938' : '#c8732d'} 0%, ${letter.gradient.includes('purple') ? '#a85d28' : '#9d5c25'} 100%)`
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/15 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4 filter drop-shadow-lg">📜</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-wider text-parchment-50 italic">
                          {letter.title}
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Section Navigation */}
                  <div className="flex space-x-3 bg-white/25 rounded-2xl p-3 backdrop-blur-md border border-white/20">
                    {['message', 'quote', 'reflection'].map((section) => (
                      <button
                        key={section}
                        onClick={() => handleSectionChange(section)}
                        className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-400 capitalize flex-1 tracking-wider font-heading italic ${
                          currentSection === section
                            ? 'bg-white text-vintage-900 shadow-lg transform scale-105 border border-vintage-200/30'
                            : 'text-white/90 hover:text-white hover:bg-white/15'
                        }`}
                      >
                        {section === 'message' && '📝'} 
                        {section === 'quote' && '✨'} 
                        {section === 'reflection' && '💭'} 
                        {section}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-10 overflow-y-auto vintage-paper-texture" style={{background: 'radial-gradient(circle at 25% 25%, #fefcf7 0%, #fcf8eb 25%, #f8f0d1 50%, #f2e4ad 100%)'}}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {currentSection === 'message' && (
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 text-7xl text-vintage-400/60 dark:text-sepia-600/60 font-heading italic">"</div>
                      <div className="prose prose-xl max-w-none text-vintage-900 dark:text-parchment-100 relative z-10">
                        <div className="font-heading leading-relaxed whitespace-pre-line text-lg md:text-xl font-medium tracking-wide italic">
                          {messageText}
                          {!messageComplete && (
                            <span className="inline-block w-1 h-7 bg-vintage-700 ml-1 animate-pulse rounded-sm"></span>
                          )}
                        </div>
                      </div>
                      <div className="absolute -bottom-6 -right-6 text-7xl text-vintage-400/60 dark:text-sepia-600/60 font-heading italic rotate-180">"</div>
                    </div>
                  )}
                  
                  {currentSection === 'quote' && (
                    <div className="text-center py-12 relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-vintage-600 to-bronze-600 rounded-full"></div>
                      <blockquote className="text-3xl md:text-4xl font-heading italic text-vintage-900 dark:text-parchment-100 leading-relaxed max-w-4xl mx-auto font-medium tracking-wide">
                        "{quoteText}"
                        {!quoteComplete && (
                          <span className="inline-block w-1 h-8 bg-vintage-700 ml-2 animate-pulse rounded-sm"></span>
                        )}
                      </blockquote>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-bronze-600 to-vintage-600 rounded-full"></div>
                    </div>
                  )}
                  
                  {currentSection === 'reflection' && (
                    <div className="relative">
                      <div className="bg-gradient-to-r from-vintage-50 to-sepia-50 dark:from-vintage-900/50 dark:to-sepia-900/50 rounded-2xl p-8 border border-vintage-200/50 dark:border-vintage-700/50 vintage-paper-texture">
                        <div className="prose prose-xl max-w-none text-vintage-900 dark:text-parchment-100">
                          <div className="font-heading leading-relaxed text-lg font-medium tracking-wide italic">
                            {reflectionText}
                            <span className="inline-block w-1 h-6 bg-vintage-700 ml-1 animate-pulse rounded-sm"></span>
                          </div>
                        </div>
                      </div>
                      {/* Decorative vintage elements */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-vintage-400 rounded-full opacity-40"></div>
                      <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-bronze-500 rounded-full opacity-50"></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-8 bg-gradient-to-r from-vintage-50/80 to-sepia-50/80 dark:from-vintage-900/50 dark:to-sepia-900/50 border-t border-vintage-200/50 dark:border-vintage-700/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🕊️</span>
                  <p className="text-sm text-vintage-800 dark:text-parchment-300 font-medium tracking-wider font-heading italic">
                    Take your time with this message
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  ✨ Close Letter
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetterModal;
