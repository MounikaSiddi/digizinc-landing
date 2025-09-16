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
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);

  const toggleSwitch = () => {
    setIsOn((prev) => {
      const newState = !prev;
      onToggle?.(newState);

      if (newState) {
        audioRef.current?.play().catch(e => console.error("Error playing sound:", e));
        toast({
          title: "You've Chosen Growth with Digizinc",
          description: "Get ready to experience the fusion of creativity and intelligence. Your brand's journey to the future starts now.",
          duration: 3000,
        });
        showConfetti();
      
      }
      return newState;
    });
  };

  return (
    <div
      className={`relative inline-flex items-center rounded-full cursor-pointer transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(to right, #D9D9D9, #F22EE5, #561F8C)',
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="absolute bg-white rounded-full shadow-md"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        style={{
          width: '40%',   // knob takes 40% of track height
          height: '80%',  // knob scales with container
          top: '10%',     // vertically center knob
          left: isOn ? 'calc(100% - 45%)' : '5%',
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
