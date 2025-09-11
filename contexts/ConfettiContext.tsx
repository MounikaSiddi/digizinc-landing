'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

interface ConfettiContextType {
  showConfetti: () => void;
}

const ConfettiContext = createContext<ConfettiContextType | undefined>(undefined);

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error('useConfetti must be used within a ConfettiProvider');
  }
  return context;
};

interface ConfettiProviderProps {
  children: ReactNode;
}

export const ConfettiProvider: React.FC<ConfettiProviderProps> = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [width, height] = useWindowSize();

  const showConfetti = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 5000); // Confetti for 5 seconds
  };

  return (
    <ConfettiContext.Provider value={{ showConfetti }}>
      {children}
      {isRunning && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.1}
          colors={['#D9D9D9', '#F22EE5', '#561F8C', '#FFFFFF']}
          confettiSource={{
            x: 0,
            y: 0,
            w: width,
            h: 1,
          }}
        />
      )}
    </ConfettiContext.Provider>
  );
};
