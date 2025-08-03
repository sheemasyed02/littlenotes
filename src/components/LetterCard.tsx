import React from 'react';
import { LetterCardProps } from '../types';

const LetterCard: React.FC<LetterCardProps> = ({ letter, onClick }) => {
  return (
    <div 
      className={`
        relative group cursor-pointer 
        bg-gradient-to-br ${letter.gradient} 
        rounded-2xl p-8 shadow-xl 
        hover:shadow-2xl hover:scale-105 
        transition-all duration-300 ease-out
        border-2 border-amber-200/40 hover:border-amber-300/60 dark:border-amber-700/40 dark:hover:border-amber-600/60
        overflow-hidden
      `}
      onClick={() => onClick(letter)}
    >
      {/* Simple corner decorations */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-200/50 group-hover:border-amber-100/70 dark:border-amber-600/50 dark:group-hover:border-amber-500/70 transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-200/50 group-hover:border-amber-100/70 dark:border-amber-600/50 dark:group-hover:border-amber-500/70 transition-colors duration-300"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-200/50 group-hover:border-amber-100/70 dark:border-amber-600/50 dark:group-hover:border-amber-500/70 transition-colors duration-300"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-200/50 group-hover:border-amber-100/70 dark:border-amber-600/50 dark:group-hover:border-amber-500/70 transition-colors duration-300"></div>

      {/* Simple shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-amber-100/60 dark:bg-amber-800/60 rounded-full text-sm font-medium text-amber-800 dark:text-amber-200 capitalize tracking-wider border border-amber-200/40 dark:border-amber-700/40">
            {letter.category}
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-amber-50 dark:text-amber-100 mb-4 leading-tight group-hover:text-white dark:group-hover:text-amber-50 transition-colors duration-300">
          {letter.title}
        </h3>
        
        <p className="text-amber-100/90 dark:text-amber-200/80 text-lg leading-relaxed font-light group-hover:text-amber-50 dark:group-hover:text-amber-100 transition-colors duration-300">
          Open when you need gentle words and understanding.
        </p>
      </div>
    </div>
  );
};

export default LetterCard;