import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-40 p-4 glass backdrop-blur-xl rounded-2xl shadow-vintage border border-vintage-300/60 dark:border-vintage-700/50 hover:scale-110 transition-all duration-700 group vintage-card animate-vintage-glow"
    >
      {/* Magical vintage glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-vintage-400/30 to-sepia-400/25 dark:from-vintage-600/40 dark:to-sepia-700/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-vintage-pulse"></div>
      
      <div
        className={`relative z-10 transition-transform duration-700 ${isDark ? 'rotate-180' : 'rotate-0'}`}
      >
        {isDark ? (
          <div className="relative">
            <svg className="w-7 h-7 text-vintage-300 group-hover:text-vintage-100 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {/* Magical sun rays */}
            <div className="absolute -inset-3">
              <div className="w-1.5 h-1.5 bg-vintage-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-magical-sparkle"></div>
              <div className="w-1.5 h-1.5 bg-sepia-300 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-magical-sparkle" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1.5 h-1.5 bg-parchment-300 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 animate-magical-sparkle" style={{animationDelay: '1s'}}></div>
              <div className="w-1.5 h-1.5 bg-tobacco-300 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 animate-magical-sparkle" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <svg className="w-7 h-7 text-vintage-700 group-hover:text-vintage-900 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {/* Magical stars */}
            <div className="absolute -inset-5">
              <div className="w-1.5 h-1.5 bg-vintage-500 rounded-full absolute top-1 right-1 animate-magical-sparkle"></div>
              <div className="w-1 h-1 bg-sepia-500 rounded-full absolute bottom-1 left-1 animate-magical-sparkle" style={{animationDelay: '1s'}}></div>
              <div className="w-1 h-1 bg-parchment-600 rounded-full absolute top-2 left-2 animate-magical-sparkle" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Enhanced Tooltip */}
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-vintage-900 dark:bg-vintage-100 text-vintage-50 dark:text-vintage-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap font-semibold tracking-wider font-heading italic animate-vintage-glow">
        {isDark ? 'Light mode' : 'Dark mode'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-vintage-900 dark:bg-vintage-100 rotate-45"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
