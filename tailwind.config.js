/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Playfair Display', 'Georgia', 'serif'],
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'script': ['Great Vibes', 'Dancing Script', 'cursive'],
        'vintage': ['Playfair Display', 'serif'],
        'modern': ['Playfair Display', 'sans-serif'],
        'handwriting': ['Kalam', 'cursive'],
      },
      colors: {
        parchment: {
          50: '#fefcf0',
          100: '#fef7d6',
          200: '#fceaac',
          300: '#f8d882',
          400: '#f2c054',
          500: '#eaa834',
          600: '#d08a2a',
          700: '#ad6b24',
          800: '#8c5225',
          900: '#734424',
        },
        vintage: {
          cream: '#f7f1e8',
          paper: '#f5efe0',
          ink: '#3a2f26',
          sepia: '#d4b896',
          brown: '#8b6f47',
          darkbrown: '#5d4e37',
          gold: '#d4af37',
          rust: '#b7410e',
          // Enhanced dark mode colors
          'dark-bg': '#1a1108',
          'dark-surface': '#2d1b0e',
          'dark-accent': '#3a2f26',
          'dark-secondary': '#4a3b2a',
          'dark-gold': '#dab869',
          'dark-text': '#f5efe5',
          'dark-muted': '#c9b896',
        }
      },
      backgroundImage: {
        'vintage-paper': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"%3E%3Cg fill=\"%23f4e4bc\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-slower': 'float 16s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(20) 1s both',
        'fade-in': 'fadeIn 2s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(5px) translateY(-5px)' },
          '50%': { transform: 'translateX(-3px) translateY(-8px)' },
          '75%': { transform: 'translateX(-5px) translateY(-3px)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
