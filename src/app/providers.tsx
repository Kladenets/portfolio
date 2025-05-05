'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  // Handle hydration mismatch for next-themes
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <>{children}</>; // Or a loading state
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}