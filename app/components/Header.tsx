'use client';

import { Flame, Moon, Sun } from 'lucide-react';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

import { cn } from '../utils/cn';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="flex h-14 items-center justify-between bg-gray-800 p-4 text-white">
      <div className="ml-4 flex cursor-pointer items-center space-x-2 font-semibold">
        <div>
          <Image
            src="/images/logo-borderless.webp"
            alt="logo"
            width={24}
            height={40}
          />
        </div>

        <TextLink href="#">Courses</TextLink>
        <TextLink href="#">Practices</TextLink>
        <TextLink href="#" selected>
          Roadmap
        </TextLink>
        <TextLink href="#">Newsletter</TextLink>
      </div>

      <div className="flex cursor-pointer items-center space-x-4">
        <div className="flex items-center space-x-2 rounded-xl bg-[#1d9772] px-4 py-1 font-semibold transition-all hover:brightness-110">
          <Flame size={20} strokeWidth={3} />
          <span>Pro</span>
        </div>

        <div
          onClick={toggleTheme}
          title={isDarkMode ? 'Light mode' : 'Dark mode'}
          className="cursor-pointer rounded-2xl px-4 py-2 transition-all hover:bg-black"
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </div>

        <div className="flex items-center justify-center space-x-2 rounded-md bg-[#4814b0] px-4 py-1 font-semibold text-white transition-all hover:brightness-110">
          <span>Sign in</span>
        </div>
      </div>
    </header>
  );
}

type TextLinkProps = {
  children: ReactNode;
  href: Route;
  selected?: boolean;
};

function TextLink({ children, href, selected = false }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-block rounded-full px-4 py-1 text-sm font-semibold transition-all hover:bg-[#4814b0]',
        selected && 'bg-[#4814b0]',
      )}
    >
      {children}
    </Link>
  );
}
