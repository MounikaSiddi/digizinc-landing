'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Switch } from '@/components/ui/switch';
import Confetti from 'react-confetti';

interface ConfettiToggleProps {
  onToggle: (isOn: boolean) => void;
}

const ConfettiToggle: React.FC<ConfettiToggleProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);
  const { toast } = useToast();
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Preload the audio file
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();

    // Set initial window dimensions for confetti
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);

    if (newState) {
      // Play sound
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.error("Error playing sound:", e));
      }

      // Show toast notification
      toast({
        title: "Growth Activated!",
        description: "You've chosen growth with Digizinc! Get ready for amazing results.",
        duration: 3000, // 3 seconds
      });

      // Trigger confetti
      setShowConfetti(true);
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Confetti lasts for 5 seconds

      return () => clearTimeout(confettiTimer);
    } else {
      toast({
        title: "Feature Deactivated.",
        description: "This feature has been turned off.",
        duration: 2000,
      });
      setShowConfetti(false);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch
          id="confetti-toggle"
          checked={isOn}
          onCheckedChange={handleToggle}
        />
        <label htmlFor="confetti-toggle">Enable Confetti Feature</label>
      </div>
      {showConfetti && (
    <Confetti
  width={windowDimension.width}
  height={windowDimension.height}
  recycle={false}
  numberOfPieces={200}
  gravity={0.1}
  initialVelocityX={{ min: -5, max: 5 }}
  initialVelocityY={{ min: 5, max: 10 }}
  confettiSource={{
    x: 0,
    y: 0,
    w: windowDimension.width,
    h: 1,   // 👈 thin strip at the top
  }}
/>

      )}
    </>
  );
};

export default ConfettiToggle;
