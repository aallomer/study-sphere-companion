
import { Atom, Beaker, Calculator, Code } from 'lucide-react';

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
    id: 'physics',
    title: 'Physics Fundamentals',
    description: 'Basic principles of physics including motion, forces, energy, and waves.',
    icon: Atom,
    estimatedTime: '20-25 min',
    cards: [
      {
        id: 'phys1',
        question: 'What is Newton\'s First Law of Motion?',
        answer: 'An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.'
      },
      {
        id: 'phys2',
        question: 'What is the formula for kinetic energy?',
        answer: 'KE = ½mv², where m is mass and v is velocity.'
      },
      {
        id: 'phys3',
        question: 'What is the speed of light in a vacuum?',
        answer: 'The speed of light in a vacuum is approximately 299,792,458 meters per second (3.00 × 10⁸ m/s).'
      },
      {
        id: 'phys4',
        question: 'What is the difference between velocity and speed?',
        answer: 'Speed is a scalar quantity (magnitude only), while velocity is a vector quantity (magnitude and direction).'
      },
      {
        id: 'phys5',
        question: 'What is gravitational acceleration on Earth?',
        answer: 'Gravitational acceleration on Earth is approximately 9.8 m/s² or 32 ft/s².'
      }
    ]
  },
  {
    id: 'chemistry',
    title: 'Chemistry Basics',
    description: 'Essential chemistry concepts including atomic structure, chemical bonds, and reactions.',
    icon: Beaker,
    estimatedTime: '18-22 min',
    cards: [
      {
        id: 'chem1',
        question: 'What is an atom?',
        answer: 'An atom is the smallest unit of matter that retains the properties of an element, consisting of protons, neutrons, and electrons.'
      },
      {
        id: 'chem2',
        question: 'What is the periodic table?',
        answer: 'The periodic table is an organized arrangement of chemical elements ordered by their atomic number and properties.'
      },
      {
        id: 'chem3',
        question: 'What is a covalent bond?',
        answer: 'A covalent bond is a chemical bond formed when two atoms share one or more pairs of electrons.'
      },
      {
        id: 'chem4',
        question: 'What is the difference between an element and a compound?',
        answer: 'An element consists of only one type of atom, while a compound is made up of two or more different elements chemically bonded together.'
      },
      {
        id: 'chem5',
        question: 'What is pH?',
        answer: 'pH is a scale that measures how acidic or basic a solution is, ranging from 0 (most acidic) to 14 (most basic), with 7 being neutral.'
      }
    ]
  },
  {
    id: 'math',
    title: 'Mathematics',
    description: 'Core mathematical concepts including algebra, geometry, and basic calculus.',
    icon: Calculator,
    estimatedTime: '22-28 min',
    cards: [
      {
        id: 'math1',
        question: 'What is the quadratic formula?',
        answer: 'x = (-b ± √(b² - 4ac)) / 2a, where a, b, and c are coefficients in the equation ax² + bx + c = 0.'
      },
      {
        id: 'math2',
        question: 'What is the Pythagorean theorem?',
        answer: 'In a right triangle, a² + b² = c², where c is the hypotenuse and a and b are the other two sides.'
      },
      {
        id: 'math3',
        question: 'What is the derivative of x²?',
        answer: 'The derivative of x² is 2x.'
      },
      {
        id: 'math4',
        question: 'What is the area of a circle?',
        answer: 'The area of a circle is πr², where r is the radius.'
      },
      {
        id: 'math5',
        question: 'What is the slope-intercept form of a line?',
        answer: 'y = mx + b, where m is the slope and b is the y-intercept.'
      },
      {
        id: 'math6',
        question: 'What is the value of π (pi)?',
        answer: 'π is approximately 3.14159, representing the ratio of a circle\'s circumference to its diameter.'
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
