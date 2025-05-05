// components/Header.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import ThemeToggle from './themeToggle';

// Simple Hamburger Icon SVG
const HamburgerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7" // Adjusted one line for a slightly different look
    ></path>
  </svg>
);

// Simple Close Icon SVG
const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Intro', href: '#intro' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-background/80 dark:bg-primary-background/80 backdrop-blur-sm shadow-md text-text-primary">
        <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo/Name */}
          <a
            href="#intro"
            className="text-xl font-bold text-emphasis dark:text-emphasis"
          >
            Kyle Kent
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-primary hover:text-primary dark:hover:text-secondary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side controls: Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                className="text-text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <HamburgerIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay (using AnimatePresence for animation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-primary-background dark:bg-primary-background shadow-lg pt-4 pb-6 px-4 sm:px-6" // Adjust top-[px] based on header height
          >
            <nav className="flex flex-col space-y-4 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-text-primary hover:text-primary dark:hover:text-secondary transition-colors"
                  onClick={handleLinkClick} // Close menu on click
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
