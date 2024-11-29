'use client';

import { useState } from "react";

type ActiveTabs = 'algorithms' | 'courses';

export function Sidebar() {
  const [activeTab, setActiveTab] = useState<ActiveTabs>("algorithms");
  const progress = 0; 
  const total = 150; 

  return (
    <aside className="w-1/5 bg-gray-800/95 rounded mt-1 text-white text-center py-2">
      <h2 className="mt-2 font-bold">Select Roadmap</h2>
      <div className="flex justify-center items-center space-x-6 mt-4">
        <div
          className={`cursor-pointer px-4 py-2 rounded-3xl font-bold text-md ${
            activeTab === "algorithms" ? "bg-[#4814b0] text-white" : ""
          }`}
          onClick={() => setActiveTab("algorithms")}
        >
          algorithms
        </div>
        <div
          className={`cursor-pointer px-4 py-2 rounded-3xl font-bold text-md ${
            activeTab === "courses" ? "bg-[#4814b0] text-white" : ""
          }`}
          onClick={() => setActiveTab("courses")}
        >
          courses
        </div>
      </div>
      {activeTab === "algorithms" && (
        <div className="mt-8 px-4">
          <p className="text-sm mt-2 font-bold ">
            ({progress} / {total})
          </p>
          <div className="w-full bg-white rounded-full h-4 mt-2">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${(progress / total) * 100}%` }} 
            ></div>
          </div>
          
          
        </div>
      )}
    </aside>
  );
}
