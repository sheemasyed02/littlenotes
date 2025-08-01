import React from 'react';
import { motion } from 'framer-motion';

const LetterCard = ({ letter, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        y: -15,
        rotateX: 3,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.97 }}
      className="magical-border cursor-pointer group p-8 h-full relative overflow-hidden ornate-corners"
      onClick={() => onClick(letter)}
    >
      {/* Vintage shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vintage-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Icon with vintage glow effect */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${letter.gradient} mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-vintage`}>
            <div className="w-10 h-10 bg-parchment-50 rounded-xl opacity-95 flex items-center justify-center shadow-inner">
              <span className="text-2xl filter drop-shadow-sm">�</span>
            </div>
          </div>
          {/* Vintage floating elements */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-vintage-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-bronze-500 rounded-full animate-ping opacity-40" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <h3 className="text-xl font-heading font-semibold text-vintage-900 dark:text-parchment-50 mb-6 leading-relaxed group-hover:text-vintage-800 dark:group-hover:text-parchment-100 transition-colors duration-500 tracking-wide italic">
          {letter.title}
        </h3>
        
        {/* Category tag */}
        <div className="mb-6">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r ${letter.gradient} text-white shadow-vintage border border-white/20 italic`}>
            {letter.category}
          </span>
        </div>
        
        <div className="mt-auto">
          <div className="group/btn inline-flex items-center text-sm font-semibold text-gradient-alt hover:scale-105 transition-transform duration-300">
            <span className="tracking-wider font-heading italic">Open letter</span>
            <motion.svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 8, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </div>
        </div>
      </div>
      
      {/* Decorative vintage corner elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-vintage-400/40 rounded-tr-lg opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-bronze-400/40 rounded-bl-lg opacity-60"></div>
      
      {/* Additional ornamental dots */}
      <div className="absolute top-6 left-6 w-1 h-1 bg-vintage-500 rounded-full opacity-70"></div>
      <div className="absolute bottom-6 right-6 w-1 h-1 bg-sepia-500 rounded-full opacity-70"></div>
    </motion.div>
  );
};

export default LetterCard;
