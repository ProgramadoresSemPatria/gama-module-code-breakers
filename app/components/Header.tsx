'use client';

import { Flame, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="flex h-14 items-center justify-between bg-gray-800 p-4 text-white">
      <div className="ml-4 flex cursor-pointer items-center space-x-8 font-semibold">
        <div>
          <Image
            src="/images/logo-borderless.webp"
            alt="logo"
            width={24}
            height={40}
          />
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

      <div className="flex cursor-pointer items-center space-x-4">
        <div className="flex items-center space-x-2 rounded-xl bg-[#1d9772] px-4 py-1 font-semibold">
          <Flame size={20} strokeWidth={3} />
          <span>Pro</span>
        </div>

        <div
          onClick={toggleTheme}
          className="cursor-pointer rounded-2xl px-4 py-2 hover:bg-black"
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </div>

        <div className="flex items-center justify-center space-x-2 rounded-md bg-[#4814b0] px-4 py-1 font-semibold text-white">
          <span>Sign in</span>
        </div>
      </div>
    </header>
  );
}
