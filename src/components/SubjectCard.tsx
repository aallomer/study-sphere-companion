
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  cardCount: number;
  estimatedTime: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

const SubjectCard = ({ title, description, cardCount, estimatedTime, icon, onSelect }: SubjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BookOpen className="h-4 w-4" />
            <span>{cardCount} cards</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{estimatedTime}</span>
          </div>
        </div>
        
        <Button 
          onClick={onSelect}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          Start Studying
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
