
import { Dna, Globe, Code, Calculator, Palette, Music } from 'lucide-react';

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  icon: any;
  estimatedTime: string;
  cards: Flashcard[];
}

export const subjects: Subject[] = [
  {
    id: 'biology',
    title: 'Biology Basics',
    description: 'Fundamental concepts in biology including cell structure, genetics, and evolution.',
    icon: Dna,
    estimatedTime: '15-20 min',
    cards: [
      {
        id: 'bio1',
        question: 'What is the basic unit of life?',
        answer: 'The cell is the basic unit of life. All living organisms are composed of one or more cells.'
      },
      {
        id: 'bio2',
        question: 'What is photosynthesis?',
        answer: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen.'
      },
      {
        id: 'bio3',
        question: 'What is DNA?',
        answer: 'DNA (Deoxyribonucleic acid) is the molecule that carries genetic information in living organisms.'
      },
      {
        id: 'bio4',
        question: 'What are the main stages of mitosis?',
        answer: 'The main stages are: Prophase, Metaphase, Anaphase, and Telophase (PMAT).'
      },
      {
        id: 'bio5',
        question: 'What is natural selection?',
        answer: 'Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce.'
      }
    ]
  },
  {
    id: 'history',
    title: 'World History',
    description: 'Key events and figures that shaped our world from ancient times to modern era.',
    icon: Globe,
    estimatedTime: '20-25 min',
    cards: [
      {
        id: 'hist1',
        question: 'When did World War II end?',
        answer: 'World War II ended on September 2, 1945, with Japan\'s formal surrender.'
      },
      {
        id: 'hist2',
        question: 'Who was the first President of the United States?',
        answer: 'George Washington was the first President of the United States, serving from 1789 to 1797.'
      },
      {
        id: 'hist3',
        question: 'What year did the Berlin Wall fall?',
        answer: 'The Berlin Wall fell on November 9, 1989, marking a significant moment in the end of the Cold War.'
      },
      {
        id: 'hist4',
        question: 'When did the Industrial Revolution begin?',
        answer: 'The Industrial Revolution began in Britain around 1760 and spread to other parts of the world.'
      },
      {
        id: 'hist5',
        question: 'What was the Renaissance?',
        answer: 'The Renaissance was a period of cultural rebirth in Europe from the 14th to 17th centuries, marked by advances in art, science, and philosophy.'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Fundamentals',
    description: 'Essential programming concepts including variables, functions, and algorithms.',
    icon: Code,
    estimatedTime: '25-30 min',
    cards: [
      {
        id: 'prog1',
        question: 'What is a variable in programming?',
        answer: 'A variable is a storage location with a name that holds data which can be modified during program execution.'
      },
      {
        id: 'prog2',
        question: 'What is the difference between a function and a method?',
        answer: 'A function is a standalone block of code, while a method is a function that belongs to a class or object.'
      },
      {
        id: 'prog3',
        question: 'What is an algorithm?',
        answer: 'An algorithm is a step-by-step procedure or formula for solving a problem or completing a task.'
      },
      {
        id: 'prog4',
        question: 'What is the difference between == and === in JavaScript?',
        answer: '== compares values with type coercion, while === compares both value and type without coercion.'
      },
      {
        id: 'prog5',
        question: 'What is Big O notation?',
        answer: 'Big O notation describes the upper bound of an algorithm\'s time or space complexity in the worst-case scenario.'
      }
    ]
  }
];
