// components/ThemeToggle.tsx
'use client'; // This component uses client-side hooks (useState, useEffect, useTheme)

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Simple SVG Icons (you can replace these with more complex ones if desired)
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  // theme = currently selected theme ('light', 'dark', or 'system')
  // resolvedTheme = the theme actually being used ('light' or 'dark'), takes 'system' into account
  // setTheme = function to change the theme
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing or a placeholder on the server and initial client render to prevent hydration mismatch
  if (!mounted) {
    // Return a placeholder button to prevent layout shift maybe?
    return (
      <button
        aria-label="Toggle theme"
        type="button"
        className="p-2 h-10 w-10 rounded-md text-text/50" // Use semi-transparent color
        disabled
      >
        <div className="h-6 w-6 animate-pulse bg-gray-300 dark:bg-gray-700 rounded"></div>{' '}
        {/* Simple pulse animation */}
      </button>
    );
  }

  const isDarkMode = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div
      onClick={toggleTheme}
      className="inline-block rounded-md cursor-pointer"
      onKeyDown={(e) =>
        e.key === 'Enter' || e.key === ' ' ? toggleTheme() : null
      }
    >
      <motion.button
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        type="button"
        className="p-2 rounded-md text-text hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-800 focus:ring-offset-primary cursor-pointer"
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-text" />
        ) : (
          <MoonIcon className="h-6 w-6 text-text" />
        )}
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
