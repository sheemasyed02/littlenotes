export interface Letter {
  id: string;
  title: string;
  category: string;
  gradient: string;
  content: {
    message: string;
    quote: string;
    reflection: string;
  };
}

export interface LetterCardProps {
  letter: Letter;
  onClick: (letter: Letter) => void;
}

export interface LetterModalProps {
  letter: Letter | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
}
