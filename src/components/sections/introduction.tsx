'use client';

import { motion, useReducedMotion } from 'motion/react';

import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

export default function Introduction({ id }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className="section" // Use theme colors
    >
      <div className="flex flex-col items-center max-w-4xl text-center">
        {/* Name as the highlight */}
        <AnimatedText className="mb-4 w-fit">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold p-8 md:p-12 bg-secondary-500 dark:bg-secondary-500 text-text tracking-tight my-transition-colors">
            Kyle Kent
          </h1>
        </AnimatedText>

        {/* Subtitle */}
        <AnimatedText delay={0.3} className="mt-8 ">
          <p className="text-lg md:text-xl lg:text-2xl text-text ">
            I build crisp, clean, and engaging online experiences
          </p>
        </AnimatedText>

        {/* Optional: Add a subtle scroll down indicator */}
        <AnimatedText delay={0.8} className="relative top-25">
          <div className="flex h-12 items-center justify-center">
            <motion.a
              href="#skills"
              aria-label="Scroll to skills"
              className="flex h-12 w-12 items-center justify-center text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary dark:text-secondary"
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { y: [-6, -5.8, -4.2, -1.8, 0, -1.8, -4.2, -5.8, -6] }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: 'linear',
                delay: 1.3,
                repeat: Infinity,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.a>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
