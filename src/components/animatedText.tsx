// components/AnimatedText.tsx
'use client';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number; // Optional delay
  className?: string; // Allow passing additional classes
}

export default function AnimatedText({
  children,
  delay = 0,
  className,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.5, delay: delay }} // Control animation speed and delay
      className={className}
    >
      {children}
    </motion.div>
  );
}
