'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { TopicContent } from '@/app/utils/topicsContent';

import { PrerequisiteCard } from './PrerequisiteCard';
import { ProblemsTable } from './ProblemsTable';
import { ProgressBar } from './ProgressBar';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicContent: TopicContent | null;
  nodeLabel: string | null;
}

export function Modal({
  isOpen,
  onClose,
  topicContent,
  nodeLabel,
}: ModalProps) {
  const [progress, _setProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckChange = (topicId: string) => {
    setCheckedItems((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId],
    );
  };

  return (
    <AnimatePresence>
      {topicContent && isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="h-full w-full overflow-y-auto bg-gray-800 p-4 shadow-lg md:w-4/5"
          >
            <button
              className="rounded bg-red-100 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-200"
              onClick={onClose}
            >
              ESC
            </button>

            <div className="flex flex-col items-center text-white">
              <h2 className="text-xl font-bold">{nodeLabel}</h2>
              <ProgressBar
                progress={progress}
                total={topicContent.problems.length}
                className="mt-2"
              />
            </div>

            <h3 className="mt-8 text-center font-semibold text-white">
              Topics
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
              {topicContent.prerequisites.map((prerequisite) => (
                <PrerequisiteCard
                  key={prerequisite.id}
                  title={prerequisite.title}
                  description={prerequisite.description}
                  checked={checkedItems.includes(prerequisite.id)}
                  onCheckChange={() => handleCheckChange(prerequisite.id)}
                />
              ))}
            </div>

            <div className="mt-8 overflow-x-auto">
              <ProblemsTable problems={topicContent.problems} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
