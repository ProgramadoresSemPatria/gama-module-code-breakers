'use client';

import { useState } from 'react';

import { CoursesFlow } from './components/CoursesFlow';
import { Flow } from './components/Flow';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

type ActiveTabs = 'algorithms' | 'courses';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>('algorithms');
  return (
    <div className="h-full w-full">
      <Header />

      <div className="flex h-[calc(100vh-48px)] w-full bg-[#13181c]">
        {activeTab === 'algorithms' && <Flow />}
        {activeTab === 'courses' && <CoursesFlow />}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
