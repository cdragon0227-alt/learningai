import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Admissions', href: '#admissions' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md transition-colors dark:border-stone-800/80 dark:bg-stone-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-xl font-bold tracking-tight text-stone-900 transition-colors dark:text-stone-100 whitespace-nowrap shrink-0"
        >
          <span className="font-editorial text-2xl font-semibold tracking-normal text-stone-900 dark:text-stone-50">
            Chan's School
          </span>
          <span className="text-xs font-normal text-stone-500 tracking-wider dark:text-stone-400">
            찬스 스쿨
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-stone-900 dark:hover:text-white whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="테마 전환"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-900"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 rounded-lg bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white whitespace-nowrap shrink-0"
          >
            <span>입학 상담 예약</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-700 md:hidden dark:border-stone-800 dark:text-stone-300"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-200 bg-stone-50 px-6 py-6 md:hidden dark:border-stone-800 dark:bg-stone-950">
          <nav className="flex flex-col gap-4 text-base font-medium text-stone-700 dark:text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-stone-950 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-lg bg-stone-900 py-3 text-center text-sm font-semibold text-white dark:bg-stone-100 dark:text-stone-900"
              >
                입학 상담 예약 신청
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
