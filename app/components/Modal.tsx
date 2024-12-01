'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { ProgressBar } from './ProgressBar';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodeData: { id: string; label: string } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, nodeData }) => {
  const [progress, useProgress] = useState(0);
  const total = 7;

  return (
    <AnimatePresence>
      {isOpen && nodeData && (
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
