'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ToggleSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onCheckedChange,
  className,
}) => {
  const toggleSwitch = () => {
    onCheckedChange(!checked);
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
          left: checked ? 'calc(100% - 45%)' : '5%',
        }}
      />
    </div>
  );
};

export default ToggleSwitch;