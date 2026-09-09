'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

import styles from './resume.module.css';

interface ResumeHeaderProps {
  name?: string;
  email?: string;
  url?: string;
  profiles: Array<{ network?: string; url?: string }>;
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ResumeHeader({
  name,
  email,
  url,
  profiles,
}: ResumeHeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBreakpointTransitioning, setIsBreakpointTransitioning] =
    useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 30rem)');
    const handleChange = () => {
      const nextIsMobile = mediaQuery.matches;
      setIsBreakpointTransitioning(true);
      setIsMobile(nextIsMobile);
      if (nextIsMobile) setIsExpanded(false);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isBreakpointTransitioning) return;

    const frame = requestAnimationFrame(() => {
      setIsBreakpointTransitioning(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [isBreakpointTransitioning]);

  const contact = (
    <address className={styles.contact}>
      {email && <a href={`mailto:${email}`}>{email}</a>}
      {url && (
        <ExternalLink href={url}>
          {url.replace(/^https?:\/\//, '')}
        </ExternalLink>
      )}
      {profiles.map((profile) => (
        <ExternalLink key={profile.url} href={profile.url!}>
          {profile.network}
        </ExternalLink>
      ))}
    </address>
  );

  const toggleContent = (
    <>
      <span>
        <span className={styles.kicker}>Software Engineer</span>
        <motion.span
          className={styles.name}
          layout
          role="heading"
          aria-level={1}
        >
          {name}
        </motion.span>
      </span>
      <AnimatePresence>
        {isMobile && (
          <motion.span
            animate={{ opacity: 1, rotate: isExpanded ? 180 : 0 }}
            aria-hidden="true"
            className={styles.expandIcon}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, rotate: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: 'easeInOut',
            }}
          >
            {isExpanded ? '−' : '+'}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <motion.header
      className={`${styles.header} ${isMobile ? styles.mobileHeader : styles.desktopHeader}`}
      data-breakpoint-transitioning={isBreakpointTransitioning || undefined}
      data-expanded={isMobile && isExpanded ? 'true' : undefined}
      layout="size"
      layoutDependency={isMobile ? isExpanded : 'desktop'}
      onClick={(event) => {
        if (!isMobile) return;
        if ((event.target as HTMLElement).closest('a')) return;
        setIsExpanded((expanded) => !expanded);
      }}
      transition={{
        layout: {
          duration: shouldReduceMotion || isBreakpointTransitioning ? 0 : 0.3,
          ease: 'easeInOut',
        },
      }}
    >
      {isMobile ? (
        <motion.button
          aria-controls="resume-contact"
          aria-expanded={isExpanded}
          className={styles.headerToggle}
          layout
          type="button"
        >
          {toggleContent}
        </motion.button>
      ) : (
        <motion.div className={styles.headerToggle} layout>
          {toggleContent}
        </motion.div>
      )}
      <motion.div
        aria-hidden={isMobile && !isExpanded}
        className={styles.contactPanel}
        id="resume-contact"
        inert={isMobile && !isExpanded}
        initial={false}
      >
        {contact}
      </motion.div>
    </motion.header>
  );
}
