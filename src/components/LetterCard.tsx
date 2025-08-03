import React from 'react';
import { LetterCardProps } from '../types';

const LetterCard: React.FC<LetterCardProps> = ({ letter, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
      onClick={() => onClick(letter)}
    >
      {/* Vintage parchment card */}
      <div className="relative bg-gradient-to-br from-parchment-100 via-parchment-200 to-parchment-300 dark:bg-gradient-to-br dark:from-vintage-dark-surface dark:via-vintage-dark-accent dark:to-vintage-dark-bg rounded-lg p-8 shadow-lg border border-parchment-300/50 dark:border-vintage-dark-gold/30 backdrop-blur-sm overflow-hidden vintage-shadow">
        
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 bg-vintage-paper opacity-20 dark:opacity-10"></div>
        
        {/* Subtle corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-vintage-brown/40 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-vintage-brown/40 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-vintage-brown/40 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-vintage-brown/40 dark:border-vintage-dark-gold/50"></div>

        <div className="relative z-10">
          {/* Letter title with handwritten style */}
          <h3 className="text-2xl font-heading font-bold text-vintage-ink dark:text-vintage-dark-text mb-4 text-center leading-tight tracking-wide vintage-text-shadow">
            {letter.title}
          </h3>
          
          {/* Category with vintage styling */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-parchment-200/80 dark:bg-vintage-dark-accent/40 text-vintage-brown dark:text-vintage-dark-gold text-sm font-medium uppercase tracking-widest rounded border border-vintage-brown/20 dark:border-vintage-dark-gold/30">
              {letter.category}
            </span>
          </div>
          
          {/* Preview text with aged look */}
          <p className="text-vintage-ink/80 dark:text-vintage-dark-text/80 font-light text-lg text-center leading-relaxed mb-6">
            Open when you need gentle words and understanding.
          </p>
          
          {/* Vintage "Open Letter" prompt */}
          <div className="text-center">
            <span className="text-vintage-brown dark:text-vintage-dark-gold font-heading text-lg group-hover:text-vintage-rust dark:group-hover:text-vintage-dark-text transition-colors duration-300">
              Open this letter...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterCard;