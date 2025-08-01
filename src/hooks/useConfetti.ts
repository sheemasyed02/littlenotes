import { useCallback } from 'react';

export const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    // Confetti animation logic would go here
    // For now, this is a placeholder
    console.log('🎉 Confetti triggered!');
  }, []);

  return { triggerConfetti };
};
