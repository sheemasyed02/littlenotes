import React from 'react';
import { LetterCardProps } from '../types';

const LetterCard: React.FC<LetterCardProps> = ({ letter, onClick }) => {
  return (
    <div 
      className={`
        relative group cursor-pointer 
        bg-gradient-to-br ${letter.gradient} 
        rounded-2xl p-8 shadow-2xl 
        hover:shadow-dusty-500/20 hover:scale-105 
        transition-all duration-300 ease-out
        border-2 border-dusty-200/40 hover:border-misty-300/60
        backdrop-blur-sm
        before:absolute before:inset-0 before:rounded-2xl 
        before:bg-gradient-to-br before:from-white/15 before:to-transparent 
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
        overflow-hidden
      `}
      onClick={() => onClick(letter)}
    >
      {/* Vintage corner decorations */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-dusty-300/50 group-hover:border-misty-200/70 transition-colors duration-300"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-dusty-300/50 group-hover:border-misty-200/70 transition-colors duration-300"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-dusty-300/50 group-hover:border-misty-200/70 transition-colors duration-300"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-dusty-300/50 group-hover:border-misty-200/70 transition-colors duration-300"></div>

      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-shimmer bg-[length:200%_100%] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-misty-50/60 backdrop-blur-sm rounded-full text-sm font-medium text-dusty-700 capitalize tracking-wider border border-dusty-200/40">
            {letter.category}
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-smoke-50 mb-4 leading-tight group-hover:text-white transition-colors duration-300 drop-shadow-lg">
          {letter.title}
        </h3>
        
        <p className="text-misty-50/90 text-lg leading-relaxed font-light group-hover:text-misty-50 transition-colors duration-300 drop-shadow-sm">
          Open when you need gentle words and understanding.
        </p>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dusty-300/0 to-smoke-400/0 group-hover:from-dusty-300/8 group-hover:to-smoke-400/8 transition-all duration-300"></div>
    </div>
  );
};

export default LetterCard;
