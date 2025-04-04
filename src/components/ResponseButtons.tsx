
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface ResponseButtonsProps {
  onResponse: (response: boolean) => void;
}

const ResponseButtons: React.FC<ResponseButtonsProps> = ({ onResponse }) => {
  const [yesHovered, setYesHovered] = useState(false);
  const [noHovered, setNoHovered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  
  const handleNoHover = () => {
    setNoHovered(true);
    // Move the "No" button to a random position within the container
    const newX = Math.random() * 200 - 100; // Value between -100 and 100
    const newY = Math.random() * 200 - 100; // Value between -100 and 100
    setNoPosition({ x: newX, y: newY });
    
    // Automatically reset after a brief delay
    setTimeout(() => {
      setNoHovered(false);
    }, 100);
  };
  
  return (
    <div className="text-center animate-slide-up mt-10">
      <div className="mb-8">
        <h2 className="font-romantic text-4xl text-valentine-dark mb-4">
          Will you be my Valentine?
        </h2>
        <Heart className="mx-auto text-valentine animate-pulse-gentle" size={40} />
      </div>
      
      <div className="flex justify-center items-center gap-8">
        <button 
          className={`btn-valentine text-xl px-10 ${yesHovered ? 'scale-110' : ''}`}
          onMouseEnter={() => setYesHovered(true)}
          onMouseLeave={() => setYesHovered(false)}
          onClick={() => onResponse(true)}
        >
          Yes
        </button>
        
        <div className="relative inline-block h-14 w-20">
          <button 
            className="btn-rose text-xl px-10 absolute transition-all duration-200"
            style={{
              transform: noHovered ? `translate(${noPosition.x}px, ${noPosition.y}px)` : 'translate(0, 0)',
            }}
            onMouseEnter={handleNoHover}
            onClick={() => onResponse(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponseButtons;
