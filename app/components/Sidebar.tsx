'use client';

import { useState } from 'react';

import { ProgressBar } from '@/app/components/ProgressBar';
import { cn } from '@/app/utils/cn';

type ActiveTabs = 'algorithms' | 'courses';

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>('algorithms');
  const progress = 0;
  const total = 150;

  return (
    <aside className="mt-1 w-1/5 rounded bg-gray-800/95 hidden md:block py-2 text-center text-white">
      <h2 className="mt-2 font-bold">Select Roadmap</h2>
      <div className="mt-4 flex items-center justify-center space-x-6">
        <div
          className={cn(
            'text-md cursor-pointer rounded-3xl px-4 py-2 font-bold',
            activeTab === 'algorithms' && 'bg-[#4814b0] text-white',
          )}
          onClick={() => setActiveTab('algorithms')}
        >
          Algorithms
        </div>
        <div
          className={cn(
            'text-md cursor-pointer rounded-3xl px-4 py-2 font-bold',
            activeTab === 'courses' && 'bg-[#4814b0] text-white',
          )}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </div>
      </div>
      {activeTab === 'algorithms' && (
        <div className="flex items-center justify-center">
          <ProgressBar progress={progress} total={total} className="mt-8" />
        </div>
      )}
    </aside>
  );
}
