
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Celebration: React.FC = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string; size: number; speed: number }>>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Show a toast notification
    toast({
      title: "They said YES! 💖",
      description: "Your Valentine's proposal was accepted!",
      duration: 5000,
    });
    
    // Create confetti pieces
    const pieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (%)
      y: Math.random() * 100, // Random y position (%)
      color: getRandomColor(),
      size: 5 + Math.random() * 15, // Random size between 5px and 20px
      speed: 3 + Math.random() * 7, // Random animation duration
    }));
    
    setConfetti(pieces);
    
    // Play celebration sound
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play error:', e));
    
    return () => {
      audio.pause();
    };
  }, [toast]);
  
  const getRandomColor = () => {
    const colors = ['#FF719A', '#FFA99F', '#FFD1DC', '#FFDEE2', '#FFC0CB'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDuration: `${piece.speed}s`,
          }}
        />
      ))}
      
      {/* Center message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg text-center animate-fade-in max-w-md">
          <Heart className="mx-auto text-valentine mb-4" size={60} fill="#FF719A" />
          <h1 className="font-romantic text-4xl text-valentine-dark mb-4">
            It's a Match!
          </h1>
          <p className="font-handwritten text-2xl text-rose-dark">
            Looking forward to a wonderful Valentine's Day with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Celebration;
