'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useConfetti } from '@/contexts/ConfettiContext';

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
  const { toast } = useToast();
  const { showConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the audio file
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      const newState = !prev;
      onToggle?.(newState);
      // Trigger confetti only when turning ON
      if (newState) {
        if (audioRef.current) {
          audioRef.current.play().catch(e => console.error("Error playing sound:", e));
        }
        toast({
          title: "You've Chosen Growth with Digizinc",
          description: "Get ready to experience the fusion of creativity and intelligence. Your brand's journey to the future starts now.",
          duration: 3000, // 3 seconds
        });
        showConfetti();
      } else {
        toast({
          title: "Feature Deactivated.",
          description: "This feature has been turned off.",
          duration: 2000,
        });
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
    </>
  );
};

export default ToggleSwitch;
