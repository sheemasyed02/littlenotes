import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  console.log('App component is rendering...');
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-vintage-100 to-sepia-200 dark:from-vintage-900 dark:to-sepia-900">
        <ThemeToggle />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-vintage-900 dark:text-parchment-100 mb-4">
              Open When Letters
            </h1>
            <p className="text-xl text-vintage-700 dark:text-parchment-300">
              Test - The app is working!
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
