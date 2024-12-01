'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import ModalCard from './ModalCard';
import { ProgressBar } from './ProgressBar';
import TopicsTable from './TopicsTable';

interface CourseTopicCard {
  id: string;
  title: string;
  description: string;
}

interface TableData {
  id: string;
  title: string;
  difficulty: string;
  problemLink: string;
  solutionLink: string;
}

const courseTopicsForCards: CourseTopicCard[] = [
  {
    id: '1',
    title: 'Dynamic Arrays',
    description: 'Data Structures & Algorithms for Beginners',
  },
  {
    id: '2',
    title: 'Hash Usage',
    description: 'Data Structures & Algorithms for Beginners',
  },
  {
    id: '3',
    title: 'Hash Implementation',
    description: 'Data Structures & Algorithms for Beginners',
  },
  {
    id: '4',
    title: 'Prefix Sums',
    description: 'Advanced Algorithms',
  },
];

const courseTopicsForTable: TableData[] = [
  {
    id: '1',
    title: 'Binary Trees',
    difficulty: 'Easy',
    problemLink: '#',
    solutionLink: '#',
  },
  {
    id: '2',
    title: 'Graph Traversal',
    difficulty: 'Medium',
    problemLink: '#',
    solutionLink: '#',
  },
  {
    id: '3',
    title: 'Dynamic Programming',
    difficulty: 'Hard',
    problemLink: '#',
    solutionLink: '#',
  },
  {
    id: '4',
    title: 'Sorting Algorithms',
    difficulty: 'Medium',
    problemLink: '#',
    solutionLink: '#',
  },
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodeData: { id: string; label: string } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, nodeData }) => {
  const [progress, setProgress] = useState(0);
  const total = 7;
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckChange = (topicId: string) => {
    setCheckedItems((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId],
    );
  };

  if (!isOpen || !nodeData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="h-full w-4/5 bg-gray-800 p-4 shadow-lg"
        >
          <button
            className="rounded bg-red-100 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-200"
            onClick={onClose}
          >
            ESC
          </button>

          <div className="flex flex-col items-center text-white">
            <h2 className="text-xl font-bold">{nodeData.label}</h2>
            <ProgressBar progress={progress} total={total} className="mt-2" />
          </div>

          <h3 className="mt-8 text-center font-semibold text-white">Topics</h3>

          
          <div className="flex flex-wrap items-center justify-center gap-4 p-4">
            {courseTopicsForCards.map((topic) => (
              <ModalCard
                key={topic.id}
                id={topic.id}
                title={topic.title}
                description={topic.description}
                checked={checkedItems.includes(topic.id)}
                onCheckChange={() => handleCheckChange(topic.id)}
              />
            ))}
          </div>

    
          
          <div className="mt-8 overflow-x-auto">
            <TopicsTable data={courseTopicsForTable} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
