
import React, { useState } from 'react';
import { subjects, Subject } from '@/data/subjects';
import SubjectCard from '@/components/SubjectCard';
import StudyCard from '@/components/StudyCard';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Target, Trophy } from 'lucide-react';

const Index = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentCardIndex(0);
    setStudiedCards(new Set());
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setCurrentCardIndex(0);
    setStudiedCards(new Set());
  };

  const handleNextCard = () => {
    if (selectedSubject && currentCardIndex < selectedSubject.cards.length - 1) {
      const currentCard = selectedSubject.cards[currentCardIndex];
      setStudiedCards(prev => new Set(prev).add(currentCard.id));
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  if (selectedSubject) {
    const currentCard = selectedSubject.cards[currentCardIndex];
    const isComplete = currentCardIndex === selectedSubject.cards.length - 1 && studiedCards.has(currentCard.id);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={handleBackToSubjects}
              className="mb-4 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Subjects
            </Button>
            
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedSubject.title}</h1>
              <ProgressBar 
                current={studiedCards.size + (currentCardIndex === selectedSubject.cards.length - 1 ? 1 : 0)} 
                total={selectedSubject.cards.length} 
                className="max-w-md mx-auto"
              />
            </div>
          </div>

          {isComplete ? (
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Congratulations!</h2>
                <p className="text-gray-600 mb-6">
                  You've completed all {selectedSubject.cards.length} cards in {selectedSubject.title}!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="font-semibold text-blue-700">Cards Studied</p>
                    <p className="text-2xl font-bold text-blue-800">{selectedSubject.cards.length}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="font-semibold text-green-700">Completion</p>
                    <p className="text-2xl font-bold text-green-800">100%</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <Trophy className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <p className="font-semibold text-purple-700">Status</p>
                    <p className="text-lg font-bold text-purple-800">Complete!</p>
                  </div>
                </div>
                <Button 
                  onClick={handleBackToSubjects}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Study Another Subject
                </Button>
              </div>
            </div>
          ) : (
            <StudyCard
              question={currentCard.question}
              answer={currentCard.answer}
              onNext={handleNextCard}
              onPrevious={handlePreviousCard}
              currentIndex={currentCardIndex}
              totalCards={selectedSubject.cards.length}
              canGoNext={currentCardIndex < selectedSubject.cards.length - 1}
              canGoPrevious={currentCardIndex > 0}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Study<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master any subject with interactive flashcards. Choose a topic below to start your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description={subject.description}
              cardCount={subject.cards.length}
              estimatedTime={subject.estimatedTime}
              icon={<subject.icon className="h-8 w-8" />}
              onSelect={() => handleSubjectSelect(subject)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            More subjects coming soon! Perfect for studying anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
