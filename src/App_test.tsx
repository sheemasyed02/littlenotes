import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { letters, getLetterById } from './data/letters';
import { Letter } from './types';
import './App.css';

function App() {
  console.log('App is rendering - check browser console!');
  console.log('Letters data:', letters);
  
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle URL parameters for deep linking
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const letterId = urlParams.get('letter');
      if (letterId) {
        const letter = getLetterById(letterId);
        if (letter) {
          setSelectedLetter(letter);
          setIsModalOpen(true);
        }
      }
    } catch (error) {
      console.error('Error handling URL parameters:', error);
    }
  }, []);

  const handleLetterClick = (letter: Letter) => {
    console.log('Letter clicked:', letter.title);
    try {
      setSelectedLetter(letter);
      setIsModalOpen(true);
      
      // Update URL for deep linking
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('letter', letter.id);
      window.history.pushState({}, '', newUrl.toString());
    } catch (error) {
      console.error('Error handling letter click:', error);
      // Fallback: just open the modal without URL update
      setSelectedLetter(letter);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    console.log('Modal closing');
    try {
      setIsModalOpen(false);
      setSelectedLetter(null);
      
      // Clear URL parameter
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('letter');
      window.history.pushState({}, '', newUrl.toString());
    } catch (error) {
      console.error('Error handling modal close:', error);
      // Fallback: just close the modal
      setIsModalOpen(false);
      setSelectedLetter(null);
    }
  };

  return (
    <ThemeProvider>
      <div style={{ 
        minHeight: '100vh', 
        padding: '20px',
        backgroundColor: '#fef8f1',
        fontFamily: 'Georgia, serif',
        color: '#422f15'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          textAlign: 'center',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Open When Letters - Working Test
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          textAlign: 'center',
          marginBottom: '3rem',
          fontStyle: 'italic'
        }}>
          ✅ React is working! Letters found: {letters.length}
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {letters.map((letter) => (
            <div 
              key={letter.id}
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: '2px solid #e8c18a',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onClick={() => handleLetterClick(letter)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#d68938',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <span style={{ fontSize: '2rem' }}>📜</span>
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                {letter.title}
              </h3>
              
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#d68938',
                color: 'white',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {letter.category}
              </span>
              
              <div style={{
                marginTop: '1rem',
                color: '#8b5a3c',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Click to open letter →
              </div>
            </div>
          ))}
        </div>

        {/* Simple Modal */}
        {isModalOpen && selectedLetter && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }} onClick={handleCloseModal}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '3px solid #d68938'
            }} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', fontStyle: 'italic', color: '#422f15' }}>
                  {selectedLetter.title}
                </h2>
                <button 
                  onClick={handleCloseModal}
                  style={{ 
                    fontSize: '2rem', 
                    border: 'none', 
                    background: 'none', 
                    cursor: 'pointer',
                    color: '#d68938',
                    fontWeight: 'bold'
                  }}
                >
                  ×
                </button>
              </div>
              
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontStyle: 'italic', color: '#d68938' }}>Message:</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontStyle: 'italic', color: '#422f15' }}>
                  {selectedLetter.content.message}
                </p>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontStyle: 'italic', color: '#d68938' }}>Quote:</h3>
                <blockquote style={{ 
                  marginBottom: '1.5rem', 
                  fontStyle: 'italic', 
                  borderLeft: '4px solid #d68938',
                  paddingLeft: '1rem',
                  color: '#666',
                  backgroundColor: '#fef8f1',
                  padding: '1rem',
                  borderRadius: '8px'
                }}>
                  {selectedLetter.content.quote}
                </blockquote>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontStyle: 'italic', color: '#d68938' }}>Reflection:</h3>
                <p style={{ lineHeight: '1.6', fontStyle: 'italic', color: '#422f15' }}>
                  {selectedLetter.content.reflection}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
