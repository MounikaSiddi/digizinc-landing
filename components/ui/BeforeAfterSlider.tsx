import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newSliderPosition = (x / width) * 100;
      if (newSliderPosition >= 0 && newSliderPosition <= 100) {
        setSliderPosition(newSliderPosition);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const width = rect.width;
      const newSliderPosition = (x / width) * 100;
      if (newSliderPosition >= 0 && newSliderPosition <= 100) {
        setSliderPosition(newSliderPosition);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <Image src={before} alt="Before" width={1200} height={675} className="w-full h-auto" />
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={after} alt="After" width={1200} height={675} className="w-full h-auto" />
      </div>
      <div
        className="absolute top-0 h-full w-1 bg-white -ml-0.5 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
