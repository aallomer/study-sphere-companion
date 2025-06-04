
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar = ({ current, total, className = '' }: ProgressBarProps) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{current} / {total}</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2"
      />
      <div className="text-xs text-gray-500 mt-1">
        {Math.round(percentage)}% complete
      </div>
    </div>
  );
};

export default ProgressBar;
