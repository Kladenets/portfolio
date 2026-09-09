'use client';

import { motion, useReducedMotion } from 'motion/react';

import ShadowBox from '@/components/shadowBox';

import styles from './resume.module.css';

export default function AnimatedHeaderBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.headerBox}
      layout="size"
      transition={{
        layout: {
          duration: shouldReduceMotion ? 0 : 0.3,
          ease: 'easeInOut',
        },
      }}
    >
      <ShadowBox
        shadowBorderStyles="h-full w-full border-4 border-secondary-200 dark:border-secondary-800"
        mainBorderStyles="h-full w-full border-4 border-secondary-500 dark:border-secondary-300"
      >
        {children}
      </ShadowBox>
    </motion.div>
  );
}
