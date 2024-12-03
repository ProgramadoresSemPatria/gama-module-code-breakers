import { ChevronDown, ChevronRight } from 'lucide-react';
import React from 'react';

interface HintProps {
  index: number;
  hintVisible: boolean;
  toggleHint: (index: number) => void;
}

const Hint: React.FC<HintProps> = ({ index, hintVisible, toggleHint }) => {
  return (
    <div className="space-y-2">
      <button
        onClick={() => toggleHint(index)}
        className="flex items-center space-x-2 rounded-lg border border-gray-600 bg-[#333] p-2 font-medium text-white hover:bg-[#444] hover:text-gray-300"
      >
        {hintVisible ? <ChevronRight /> : <ChevronDown />}
        <span>Hint {index + 1}</span>
      </button>

      {hintVisible && (
        <div className="mt-2 rounded-lg border border-gray-700 bg-[#222] p-4">
          <p>Hint {index + 1}: This is the content of the hint.</p>
        </div>
      )}
    </div>
  );
};

export default Hint;
