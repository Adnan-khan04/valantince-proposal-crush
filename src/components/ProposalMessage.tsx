
import React, { useState, useEffect } from 'react';

interface ProposalMessageProps {
  onComplete: () => void;
}

const ProposalMessage: React.FC<ProposalMessageProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  
  // You can customize these lines with your own message
  const lines = [
    "Dear...",
    "From the moment we first met, something special happened.",
    "The way you smile, the way you laugh...",
    "You've brought so much happiness into my life.",
    "Every moment with you feels like a gift.",
    "I can't stop thinking about you.",
    "And that's why I wanted to ask you something special...",
  ];
  
  useEffect(() => {
    // If we've completed all lines, call the onComplete callback
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        onComplete();
      }, 500);
      return;
    }
    
    // If we've completed the current line
    if (charIndex >= lines[lineIndex].length) {
      setShowContinue(true);
      return;
    }
    
    // Type the next character
    const typingTimer = setTimeout(() => {
      setDisplayedText(lines[lineIndex].substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    }, 70); // Speed of typing
    
    return () => clearTimeout(typingTimer);
  }, [lineIndex, charIndex, lines, onComplete]);
  
  const handleContinue = () => {
    setShowContinue(false);
    setLineIndex(lineIndex + 1);
    setCharIndex(0);
    setDisplayedText('');
  };
  
  return (
    <div className="relative max-w-lg mx-auto bg-white/90 p-8 rounded-lg shadow-lg animate-fade-in">
      <div className="text-center mb-6">
        <span className="inline-block heart bg-valentine w-10 h-10 mb-4 animate-pulse-gentle"></span>
      </div>
      
      <div className="mb-8 min-h-[200px] flex flex-col justify-center">
        <p className="font-handwritten text-2xl text-rose-dark leading-relaxed">
          {displayedText}
          <span className={`opacity-50 ${charIndex < lines[lineIndex]?.length ? 'inline-block' : 'hidden'}`}>|</span>
        </p>
      </div>
      
      {showContinue && (
        <div className="text-center">
          <button 
            onClick={handleContinue}
            className="btn-valentine animate-fade-in"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default ProposalMessage;
