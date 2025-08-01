<<<<<<< HEAD
# Open When Letters

A professional, elegant, and emotionally expressive web application that brings the concept of physical "Open When" envelopes into the digital world. This application provides comfort, strength, and hope through thoughtfully written letters for different emotional moments.

## Features

### 🎯 Core Functionality
- **Elegant Letter Categories**: Professional phrased categories like "In moments of emotional heaviness" and "When you're questioning your strength"
- **Immersive Modal Experience**: Each letter opens in a beautiful modal with typewriter animations
- **Multi-section Content**: Each letter includes a main message, inspirational quote, and personal reflection
- **Deep Linking**: Share specific letters with URLs like `?letter=strength`

### 🎨 Design & Experience
- **Professional Aesthetic**: Clean, minimal design that feels supportive rather than childish
- **Responsive Layout**: Beautiful on both mobile and desktop devices
- **Dark/Light Mode**: Full theme support with system preference detection
- **Smooth Animations**: Powered by Framer Motion for professional transitions

### 🛠 Technical Features
- **Modern React**: Built with React 18 and Vite for optimal performance
- **Tailwind CSS**: Utility-first styling with custom design system
- **TypeScript Ready**: Structured for easy TypeScript migration
- **Modular Architecture**: Clean component separation and reusable hooks

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context (Theme)
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd open-when-letters
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LetterCard.jsx  # Individual letter preview cards
│   ├── LetterModal.jsx # Full letter reading experience
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme state management
├── data/              # Application data
│   └── letters.js     # Letter content and structure
├── hooks/             # Custom React hooks
│   └── useTypewriter.js # Typewriter text animation
└── App.jsx            # Main application component
```

## Letter Categories

The application includes thoughtfully written letters for:

- **Emotional Heaviness**: Comfort for overwhelming moments
- **Distance Difficulty**: Support when loved ones feel far away
- **Questioning Strength**: Encouragement during self-doubt
- **Self-Doubt**: Confidence building and reassurance
- **Personal Pride**: Celebration of achievements
- **New Beginnings**: Support for starting fresh

## Customization

### Adding New Letters

1. **Update the letters data** in `src/data/letters.js`:
   ```javascript
   {
     id: 'unique-id',
     title: 'Professional category phrase',
     category: 'emotional-category',
     gradient: 'from-color-400 to-color-600',
     content: {
       message: 'Main thoughtful message...',
       quote: 'Inspirational quote',
       reflection: 'Personal reflection...'
     }
   }
   ```

2. **Follow the design principles**:
   - Professional, not childish tone
   - Emotionally supportive language
   - Consistent gradient color schemes
   - Meaningful, thoughtful content

### Styling Customization

The application uses a custom Tailwind configuration with:
- **Custom Fonts**: Inter, Poppins, and Lora
- **Extended Colors**: Warm and cool color palettes
- **Custom Animations**: Fade-in, slide-up, typewriter effects
- **Component Classes**: Reusable card, button, and glass morphism styles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Design Guidelines

- Maintain the professional, elegant aesthetic
- Ensure emotional resonance without being childish
- Test responsiveness on multiple devices
- Verify accessibility standards
- Keep animations smooth and purposeful

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the concept of physical "Open When" letters
- Built with love for moments when words matter most
- Designed to provide comfort and emotional support through technology

---

*Made with love for moments when words matter most*+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# littlenotes
=======
# Open When Letters

A professional, elegant, and emotionally expressive web application that brings the concept of physical "Open When" envelopes into the digital world. This application provides comfort, strength, and hope through thoughtfully written letters for different emotional moments.

## Features

### 🎯 Core Functionality
- **Elegant Letter Categories**: Professional phrased categories like "In moments of emotional heaviness" and "When you're questioning your strength"
- **Immersive Modal Experience**: Each letter opens in a beautiful modal with typewriter animations
- **Multi-section Content**: Each letter includes a main message, inspirational quote, and personal reflection
- **Deep Linking**: Share specific letters with URLs like `?letter=strength`

### 🎨 Design & Experience
- **Professional Aesthetic**: Clean, minimal design that feels supportive rather than childish
- **Responsive Layout**: Beautiful on both mobile and desktop devices
- **Dark/Light Mode**: Full theme support with system preference detection
- **Smooth Animations**: Powered by Framer Motion for professional transitions

### 🛠 Technical Features
- **Modern React**: Built with React 18 and Vite for optimal performance
- **Tailwind CSS**: Utility-first styling with custom design system
- **TypeScript Ready**: Structured for easy TypeScript migration
- **Modular Architecture**: Clean component separation and reusable hooks

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context (Theme)
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone https://github.com/sheemasyed02/littlenotes
   cd open-when-letters
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LetterCard.jsx  # Individual letter preview cards
│   ├── LetterModal.jsx # Full letter reading experience
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme state management
├── data/              # Application data
│   └── letters.js     # Letter content and structure
├── hooks/             # Custom React hooks
│   └── useTypewriter.js # Typewriter text animation
└── App.jsx            # Main application component
```

## Letter Categories

The application includes thoughtfully written letters for:

- **Emotional Heaviness**: Comfort for overwhelming moments
- **Distance Difficulty**: Support when loved ones feel far away
- **Questioning Strength**: Encouragement during self-doubt
- **Self-Doubt**: Confidence building and reassurance
- **Personal Pride**: Celebration of achievements
- **New Beginnings**: Support for starting fresh

## Customization

### Adding New Letters

1. **Update the letters data** in `src/data/letters.js`:
   ```javascript
   {
     id: 'unique-id',
     title: 'Professional category phrase',
     category: 'emotional-category',
     gradient: 'from-color-400 to-color-600',
     content: {
       message: 'Main thoughtful message...',
       quote: 'Inspirational quote',
       reflection: 'Personal reflection...'
     }
   }
   ```

2. **Follow the design principles**:
   - Professional, not childish tone
   - Emotionally supportive language
   - Consistent gradient color schemes
   - Meaningful, thoughtful content

### Styling Customization

The application uses a custom Tailwind configuration with:
- **Custom Fonts**: Inter, Poppins, and Lora
- **Extended Colors**: Warm and cool color palettes
- **Custom Animations**: Fade-in, slide-up, typewriter effects
- **Component Classes**: Reusable card, button, and glass morphism styles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Design Guidelines

- Maintain the professional, elegant aesthetic
- Ensure emotional resonance without being childish
- Test responsiveness on multiple devices
- Verify accessibility standards
- Keep animations smooth and purposeful

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the concept of physical "Open When" letters
- Built with love for moments when words matter most
- Designed to provide comfort and emotional support through technology

---

*Made with love for moments when words matter most*+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 14e1e44d998b2d052ac6becf9fb4d80f59fcb55a
