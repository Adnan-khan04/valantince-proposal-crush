import React, { useState } from 'react';
import HeartAnimation from '@/components/HeartAnimation';
import ProposalMessage from '@/components/ProposalMessage';
import ResponseButtons from '@/components/ResponseButtons';
import Celebration from '@/components/Celebration';

const Index = () => {
  const [step, setStep] = useState<'intro' | 'proposal' | 'response' | 'celebration'>('intro');
  
  const handleMessageComplete = () => {
    setStep('response');
  };
  
  const handleResponse = (accepted: boolean) => {
    if (accepted) {
      setStep('celebration');
    } else {
      console.log("Nice try!");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 relative overflow-hidden">
      <HeartAnimation />
      
      <div className="w-full max-w-2xl mx-auto z-10 relative">
        {step === 'intro' && (
          <div className="text-center animate-fade-in">
            <h1 className="font-romantic text-5xl text-valentine-dark mb-6">
              A Special Message...
            </h1>
            <p className="font-handwritten text-2xl text-rose-dark mb-10">
              I have something important to tell you...
            </p>
            <button 
              className="btn-valentine text-xl"
              onClick={() => setStep('proposal')}
            >
              Open ❤️
            </button>
          </div>
        )}
        
        {step === 'proposal' && (
          <ProposalMessage onComplete={handleMessageComplete} />
        )}
        
        {step === 'response' && (
          <ResponseButtons onResponse={handleResponse} />
        )}
        
        {step === 'celebration' && (
          <Celebration />
        )}
      </div>
    </div>
  );
};

export default Index;
