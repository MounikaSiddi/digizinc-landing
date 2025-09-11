'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

interface ToggleSwitchProps {
  initialState?: boolean;
  onToggle?: (isOn: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialState = false,
  onToggle,
  className,
}) => {
  const [isOn, setIsOn] = useState(initialState);
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const toggleSwitch = () => {
    setIsOn((prev) => {
      const newState = !prev;
      onToggle?.(newState);
      // Trigger confetti only when turning ON
      if (newState) {
        setShowConfetti(true);
        // Hide confetti after a short duration
        setTimeout(() => setShowConfetti(false), 5000); // Confetti for 5 seconds
      }
      return newState;
    });
  };

  return (
    <>
      <div
        className={`relative inline-flex items-center rounded-full cursor-pointer transition-all duration-300 ${className}`}
        style={{
          width: '140px', // Increased width
          height: '70px', // Increased height
          background: 'linear-gradient(to right, #D9D9D9, #F22EE5, #561F8C)',
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          className="absolute w-16 h-16 bg-white rounded-full shadow-md" // Further increased knob size
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          style={isOn ? { left: 'calc(100% - 74px)' } : { left: '5px' }} // Adjusted left position
        />
      </div>
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false} // Don't loop confetti
          numberOfPieces={500} // Number of confetti pieces
          gravity={0.1} // How fast confetti falls
          colors={['#D9D9D9', '#F22EE5', '#561F8C', '#FFFFFF']} // Custom colors
        />
      )}
    </>
  );
};

export default ToggleSwitch;
