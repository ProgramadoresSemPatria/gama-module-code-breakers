'use client';

import React, { useState } from 'react';
import { Sun, Moon, Flame } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="bg-gray-800 text-white p-4 h-14 flex justify-between items-center">
      
      <div className="flex items-center space-x-8 cursor-pointer ml-4 font-semibold">
        <div>
          <Image src="/images/logo-borderless.webp" alt="logo" width={24} height={40} />
        </div>
        <div>
          <span>Courses</span>
        </div>
        <div>
          <span>Practices</span>
        </div>
        <div>
          <span>Roadmap</span>
        </div>
        <div>
          <span>Newsletter</span>
        </div>
      </div>

      
      <div className="flex items-center space-x-4 cursor-pointer">
        
        <div className="flex items-center space-x-2 bg-[#1d9772] px-4 py-1 rounded-xl font-semibold">
          <Flame size={20} strokeWidth={3} />
          <span>Pro</span>
        </div>

       
        <div onClick={toggleTheme} className="cursor-pointer hover:bg-black px-4 py-2 rounded-2xl">
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </div>

        
        <div className="flex justify-center items-center space-x-2 bg-[#4814b0] px-4 py-1 text-white rounded-md font-semibold">
          <span>Sign in</span>
        </div>
      </div>
    </header>
  );
}
