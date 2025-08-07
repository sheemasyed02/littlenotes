import { useCallback } from 'react';

export const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    console.log('🎉 Confetti triggered!');
  }, []);

  return { triggerConfetti };
};
