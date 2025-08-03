import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-40 p-4 bg-amber-100/80 dark:bg-amber-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-amber-300/50 dark:border-amber-700/50 hover:scale-110 transition-all duration-300 group"
    >
      <div
        className={`relative z-10 transition-transform duration-500 ${isDark ? 'rotate-0' : 'rotate-0'}`}
      >
        {isDark ? (
          <div className="relative">
            <svg className="w-6 h-6 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {/* Stars */}
            <div className="absolute -inset-4">
              <div className="w-1 h-1 bg-amber-200 rounded-full absolute top-1 right-1 animate-ping"></div>
              <div className="w-0.5 h-0.5 bg-amber-300 rounded-full absolute bottom-1 left-1 animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="w-0.5 h-0.5 bg-amber-400 rounded-full absolute top-2 left-2 animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {/* Sun rays */}
            <div className="absolute -inset-2">
              <div className="w-1 h-1 bg-amber-600 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-ping"></div>
              <div className="w-1 h-1 bg-amber-600 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1 h-1 bg-amber-600 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="w-1 h-1 bg-amber-600 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-amber-900 text-amber-50 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold tracking-wider">
        {isDark ? 'Light mode' : 'Dark mode'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-900 rotate-45"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
