'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useConfetti } from '@/contexts/ConfettiContext';
import { Switch } from '@/components/ui/switch';

interface ConfettiToggleProps {
  onToggle?: (isOn: boolean) => void;
}

const ConfettiToggle: React.FC<ConfettiToggleProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);
  const { toast } = useToast();
  const { showConfetti, stopConfetti } = useConfetti();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/confetti_sound.mp3');
    audioRef.current.load();
  }, []);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);

    if (newState) {
      // 🎵 Play sound
      audioRef.current?.play().catch(e => console.error('Error playing sound:', e));

      // 🔔 Toast
      toast({
        title: 'Growth Activated!',
        description: "You've chosen growth with Digizinc 🚀",
        duration: 3000,
      });

      // 🎉 Confetti
      showConfetti(5000);
    } else {
      toast({
        title: 'Feature Deactivated',
        description: 'This feature has been turned off.',
        duration: 2000,
      });
      stopConfetti();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="confetti-toggle"
        checked={isOn}
        onCheckedChange={handleToggle}
      />
      <label htmlFor="confetti-toggle" className="text-sm font-medium">
        Enable Confetti Feature
      </label>
    </div>
  );
};

export default ConfettiToggle;
