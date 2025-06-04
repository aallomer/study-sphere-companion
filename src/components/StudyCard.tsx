
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface StudyCardProps {
  question: string;
  answer: string;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCards: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const StudyCard = ({ 
  question, 
  answer, 
  onNext, 
  onPrevious, 
  currentIndex, 
  totalCards,
  canGoNext,
  canGoPrevious 
}: StudyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    onPrevious();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 text-center text-sm text-gray-600">
        Card {currentIndex + 1} of {totalCards}
      </div>
      
      <div className="relative h-80 mb-6 perspective-1000">
        <Card 
          className={`absolute inset-0 w-full h-full cursor-pointer transition-transform duration-500 preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front of card - Question */}
          <CardContent className="absolute inset-0 w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg backface-hidden">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Question</h3>
              <p className="text-xl leading-relaxed">{question}</p>
              <p className="text-sm mt-4 opacity-80">Click to reveal answer</p>
            </div>
          </CardContent>
          
          {/* Back of card - Answer */}
          <CardContent className="absolute inset-0 w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg backface-hidden rotate-y-180">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Answer</h3>
              <p className="text-xl leading-relaxed">{answer}</p>
              <p className="text-sm mt-4 opacity-80">Click to see question</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleFlip}
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Flip Card
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!canGoNext}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StudyCard;
