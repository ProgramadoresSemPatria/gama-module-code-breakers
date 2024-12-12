'use client';

import { ProgressBar } from '@/app/components/ProgressBar';
import { cn } from '@/app/utils/cn';

import { useGlobalStore } from '../globalStore';
import { topicsContent } from '../utils/topicsContent';

type ActiveTabs = 'algorithms' | 'courses';

interface SidebarProps {
  activeTab: ActiveTabs;
  setActiveTab: (tab: ActiveTabs) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { topicsProgress } = useGlobalStore();

  const progress = Object.values(topicsProgress).reduce(
    (acc, { problemsCompleted }) => {
      return acc + problemsCompleted.length;
    },
    0,
  );

  const problemsAmount = Object.values(topicsContent).reduce(
    (acc, { problems }) => {
      return acc + problems.length;
    },
    0,
  );

  return (
    <aside className="mt-1 hidden w-1/5 rounded bg-gray-800/95 py-2 text-center text-white md:block">
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
        <div className="flex flex-col items-center justify-center gap-2">
          <ProgressBar
            progress={progress}
            total={problemsAmount}
            className="mt-8"
            showLabel
          />
        </div>
      )}
    </aside>
  );
}
