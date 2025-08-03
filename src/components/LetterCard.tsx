import React from 'react';
import { LetterCardProps } from '../types';

const LetterCard: React.FC<LetterCardProps> = ({ letter, onClick }) => {
  return (
    <div 
      className={`
        relative group cursor-pointer 
        bg-gradient-to-br ${letter.gradient} 
        rounded-2xl p-8 shadow-vintage hover:shadow-vintage-glow hover:scale-105 
        transition-all duration-500 ease-out
        border-2 border-vintage-200/40 hover:border-vintage-300/70 dark:border-vintage-700/30 dark:hover:border-vintage-600/60
        backdrop-blur-sm animate-vintage-glow
        before:absolute before:inset-0 before:rounded-2xl 
        before:bg-vintage-paper/20 dark:before:bg-vintage-dark/30
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
        overflow-hidden
      `}
      onClick={() => onClick(letter)}
    >
      {/* Vintage corner decorations with magical sparkles */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-vintage-300/60 group-hover:border-vintage-200/80 dark:border-vintage-600/50 dark:group-hover:border-vintage-500/70 transition-colors duration-500">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-vintage-400 rounded-full opacity-0 group-hover:opacity-100 animate-magical-sparkle transition-opacity duration-500"></div>
      </div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-vintage-300/60 group-hover:border-vintage-200/80 dark:border-vintage-600/50 dark:group-hover:border-vintage-500/70 transition-colors duration-500">
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-sepia-400 rounded-full opacity-0 group-hover:opacity-100 animate-magical-sparkle transition-opacity duration-500" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-vintage-300/60 group-hover:border-vintage-200/80 dark:border-vintage-600/50 dark:group-hover:border-vintage-500/70 transition-colors duration-500">
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-parchment-400 rounded-full opacity-0 group-hover:opacity-100 animate-magical-sparkle transition-opacity duration-500" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-vintage-300/60 group-hover:border-vintage-200/80 dark:border-vintage-600/50 dark:group-hover:border-vintage-500/70 transition-colors duration-500">
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-tobacco-400 rounded-full opacity-0 group-hover:opacity-100 animate-magical-sparkle transition-opacity duration-500" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Magical shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-shimmer bg-[length:200%_100%] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-vintage-50/70 dark:bg-vintage-900/60 backdrop-blur-sm rounded-full text-sm font-medium text-vintage-800 dark:text-vintage-200 capitalize tracking-wider border border-vintage-200/50 dark:border-vintage-700/40 animate-vintage-pulse">
            {letter.category}
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-vintage-50 dark:text-vintage-100 mb-4 leading-tight group-hover:text-white dark:group-hover:text-vintage-50 transition-colors duration-500 drop-shadow-lg animate-sepia-breath">
          {letter.title}
        </h3>
        
        <p className="text-vintage-100/90 dark:text-vintage-200/80 text-lg leading-relaxed font-light group-hover:text-vintage-50 dark:group-hover:text-vintage-100 transition-colors duration-500 drop-shadow-sm">
          Open when you need gentle words and understanding.
        </p>
      </div>

      {/* Magical glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vintage-300/0 to-sepia-400/0 group-hover:from-vintage-300/15 group-hover:to-sepia-400/10 dark:group-hover:from-vintage-600/20 dark:group-hover:to-sepia-700/15 transition-all duration-500"></div>
    </div>
  );
};

export default LetterCard;