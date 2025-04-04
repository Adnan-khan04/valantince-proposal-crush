
import React, { useEffect, useState } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

const HeartAnimation: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  
  useEffect(() => {
    // Create initial floating hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random horizontal position
      size: 10 + Math.random() * 20, // random size between 10px and 30px
      speed: 20 + Math.random() * 40, // random animation duration
      opacity: 0.3 + Math.random() * 0.7, // random opacity
      delay: Math.random() * 10, // random delay
    }));
    
    setHearts(initialHearts);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] animate-float"
          style={{
            left: `${heart.x}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.speed}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <div 
            className="heart" 
            style={{ 
              width: `${heart.size}px`, 
              height: `${heart.size}px` 
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;
