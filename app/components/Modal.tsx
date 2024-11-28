'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodeData: { id: string; label: string } | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, nodeData }) => {
  return (
    <AnimatePresence>
      {isOpen && nodeData && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-gray-800 h-full w-4/5 p-4 shadow-lg"
          >
            <button
              className="bg-red-100 font-bold text-xs text-red-600 px-4 py-2 rounded hover:bg-red-200"
              onClick={onClose}
            >
              ESC
            </button>

            <div className="text-white flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">{nodeData.label}</h2>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
