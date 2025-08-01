export interface Letter {
  id: string;
  title: string;
  category: string;
  description?: string;
  content: {
    message: string;
    quote: string;
    reflection: string;
  };
  gradient: string;
}

export interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface LetterCardProps {
  letter: Letter;
  onClick: () => void;
}

export interface LetterModalProps {
  letter: Letter | null;
  isOpen: boolean;
  onClose: () => void;
}
