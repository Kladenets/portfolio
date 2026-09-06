'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

const commonTransition = {
  type: 'tween',
  duration: 0.2,
  ease: 'easeInOut',
};

const wrapperVariants = {
  rest: { y: 50, opacity: 0 },
  hover: {},
};

const shadowBackgroundVariants = {
  rest: { x: 6, y: 6 },
};

export default function Contact({ id }: SectionProps) {
  const email = 'connect@kylekent.dev';
  const mailToLink = `mailto:${email}`;
  const githubUrl = 'https://github.com/Kladenets/';
  const linkedinUrl = 'https://www.linkedin.com/in/kylekentpa/'; // Replace with your actual LinkedIn URL
  const resumeUrl = '/resume';

  const links = [
    {
      text: 'View My GitHub',
      href: githubUrl,
      external: true,
    },
    {
      text: 'View My Resume',
      href: resumeUrl,
      external: false,
    },
    {
      text: 'Connect on LinkedIn',
      href: linkedinUrl,
      external: true,
    },
    {
      text: 'Send Me an Email',
      href: mailToLink,
      external: true,
    },
  ];

  return (
    <section id={id} className="section">
      <div className="max-w-5xl text-center w-full flex flex-col items-center">
        <AnimatedText className="w-fit justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-10 md:mb-16 text-emphasis bg-accent-200 dark:bg-accent-700 p-5 md:p-10 text-text my-transition-colors">
            Let&apos;s Connect
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-text mb-6 md:mb-12 leading-relaxed my-transition-colors">
            I&apos;m passionate about crafting beautiful and intuitive digital
            experiences and the ever-changing tech they&apos;re built with.
            Whether you have a project in mind, a role to discuss, or just want
            to chat about tech, I&apos;d love to hear from you!
          </p>
        </AnimatedText>

        <div className="space-y-6 md:space-y-8 w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 mt-6 w-full">
            {links.map((link, index) => (
              <motion.div
                key={index}
                className="relative inline-block cursor-pointer w-full"
                variants={wrapperVariants}
                initial="rest"
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-4 border-accent-200 dark:border-accent-800 z-0 my-transition-colors" // Fills the button's space
                  variants={shadowBackgroundVariants}
                />

                {link.external ? (
                  <motion.a
                    className="contact-link my-transition-colors underline lg:no-underline"
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: -3, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={commonTransition}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </motion.a>
                ) : (
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: -3, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={commonTransition}
                  >
                    <Link
                      className="contact-link my-transition-colors underline lg:no-underline"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatedText delay={0.8} className="mt-12 md:mt-16">
          <p className="text-sm text-text/70 my-transition-colors">
            Based in the Greater Philadelphia Area – Open to remote
            opportunities.
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
