import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';


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
        className="flex items-center text-white font-medium hover:text-gray-300 space-x-2 p-2 rounded-lg border border-gray-600 bg-[#333] hover:bg-[#444]"
      >
        
        {hintVisible ? (
            <ChevronRight/>
        ) : (
            <ChevronDown/>
        )}
        <span>Hint {index + 1}</span>
      </button>
      
      {hintVisible && (
        <div className="bg-[#222] p-4 rounded-lg border border-gray-700 mt-2">
          <p>Hint {index + 1}: This is the content of the hint.</p>
        </div>
      )}
    </div>
  );
};

export default Hint;
