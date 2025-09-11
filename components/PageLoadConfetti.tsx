'use client';

import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const PageLoadConfetti: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window dimensions
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });

    // Update dimensions on window resize
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    // Trigger confetti after a short delay to ensure page is rendered
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500); // Adjust delay as needed

    // Stop confetti after a certain duration
    const stopTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Confetti lasts for 5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(stopTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!showConfetti) {
    return null;
  }

  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false} // Confetti falls once
      numberOfPieces={200} // Adjust number of pieces
      gravity={0.1} // Adjust gravity for slower fall
      initialVelocityX={{ min: -5, max: 5 }}
      initialVelocityY={{ min: 5, max: 10 }}
      confettiSource={{
        x: 0,
        y: 0,
        w: windowDimension.width,
        h: 0, // Start from the top of the screen
      }}
    />
  );
};

export default PageLoadConfetti;
