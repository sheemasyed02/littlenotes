import React from 'react';
import { LetterCardProps } from '../types';

const LetterCard: React.FC<LetterCardProps> = ({ letter, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300"
      onClick={() => onClick(letter)}
    >
      {/* Vintage parchment card */}
      <div className="relative bg-gradient-to-br from-parchment-100 via-parchment-200 to-parchment-300 dark:bg-gradient-to-br dark:from-vintage-dark-surface dark:via-vintage-dark-accent dark:to-vintage-dark-secondary rounded-lg p-8 shadow-lg border border-parchment-300/50 dark:border-vintage-dark-gold/40 backdrop-blur-sm overflow-hidden vintage-shadow">
        
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 bg-vintage-paper opacity-30 dark:opacity-20"></div>
        
        {/* Subtle paper grain effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-parchment-100/20 to-vintage-sepia/10 dark:from-transparent dark:via-vintage-dark-gold/10 dark:to-vintage-dark-surface/20"></div>
        
        {/* Subtle corner decorations */}
        <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-vintage-brown/30 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-vintage-brown/30 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-vintage-brown/30 dark:border-vintage-dark-gold/50"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-vintage-brown/30 dark:border-vintage-dark-gold/50"></div>

        <div className="relative z-10">
          {/* Letter title with handwritten style */}
          <h3 className="text-2xl font-heading font-bold text-vintage-ink dark:text-vintage-dark-text mb-4 text-center leading-tight tracking-wide vintage-text-shadow">
            {letter.title}
          </h3>
          
          {/* Category with vintage styling */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-parchment-200/80 dark:bg-vintage-dark-accent/50 text-vintage-brown dark:text-vintage-dark-muted text-sm font-medium uppercase tracking-widest rounded border border-vintage-brown/20 dark:border-vintage-dark-gold/40">
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