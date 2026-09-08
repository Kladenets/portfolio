'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import styles from './resume.module.css';

export default function AnimatedResumePage({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const shouldReduceMotion = useReducedMotion();
  const pageRef = useRef<HTMLElement>(null);
  const [layoutRevision, setLayoutRevision] = useState(0);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    let frame = 0;
    const updateLayoutRevision = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setLayoutRevision((revision) => revision + 1);
      });
    };
    const observer = new ResizeObserver(updateLayoutRevision);

    observer.observe(page);
    window.addEventListener('resize', updateLayoutRevision);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', updateLayoutRevision);
    };
  }, []);

  return (
    <motion.main
      className={`${styles.page} my-transition-colors`}
      layout
      layoutDependency={layoutRevision}
      ref={pageRef}
      style={style}
      transition={{
        layout: {
          duration: shouldReduceMotion ? 0 : 0.3,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.article
        className={`${styles.document} my-transition-colors`}
        layout="size"
        layoutDependency={layoutRevision}
        transition={{
          layout: {
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: 'easeInOut',
          },
        }}
      >
        {children}
      </motion.article>
    </motion.main>
  );
}
