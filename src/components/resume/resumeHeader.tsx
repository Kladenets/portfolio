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
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 30rem)');
    const handleChange = () => {
      const nextIsMobile = mediaQuery.matches;
      setIsMobile(nextIsMobile);
      if (nextIsMobile) setIsExpanded(false);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

  return (
    <motion.header
      aria-controls={isMobile ? 'resume-contact' : undefined}
      aria-expanded={isMobile ? isExpanded : undefined}
      className={`${styles.header} ${isMobile ? styles.mobileHeader : styles.desktopHeader}`}
      layout="size"
      onClick={() => {
        if (isMobile) setIsExpanded((expanded) => !expanded);
      }}
      onKeyDown={(event) => {
        if (isMobile && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          setIsExpanded((expanded) => !expanded);
        }
      }}
      role={isMobile ? 'button' : undefined}
      tabIndex={isMobile ? 0 : undefined}
      transition={{
        layout: {
          duration: shouldReduceMotion ? 0 : 0.3,
          ease: 'easeInOut',
        },
      }}
    >
      <motion.div className={styles.headerToggle} layout>
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
        <AnimatePresence initial={false}>
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
      </motion.div>
      {!isMobile && <div className={styles.contactPanel}>{contact}</div>}
      <AnimatePresence initial={false}>
        {isMobile && isExpanded && (
          <motion.div
            animate={{ height: 'auto', marginTop: '1rem', opacity: 1 }}
            aria-hidden={false}
            className={styles.contactPanel}
            exit={{ height: 0, marginTop: 0, opacity: 0 }}
            id="resume-contact"
            initial={{ height: 0, marginTop: 0, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: 'easeOut',
            }}
          >
            {contact}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
