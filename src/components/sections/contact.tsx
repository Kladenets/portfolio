'use client';

import { motion } from 'framer-motion';

import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

// In your component file

const commonTransition = {
  type: 'tween', // Use tween for smooth, duration-based animation
  duration: 0.2, // Adjust duration as needed (e.g., 0.2 for 200ms)
  ease: 'easeInOut', // Common easing function
};

const wrapperVariants = {
  rest: { y: 50, opacity: 0 },
  hover: {},
};

const shadowBackgroundVariants = {
  rest: { x: 6, y: 6 }, // Initial offset (4px down, 4px right)
};

export default function Contact({ id }: SectionProps) {
  const email = 'kkent908@gmail.com';
  const mailToLink = `mailto:${email}`;
  const githubUrl = 'https://github.com/Kladenets/';
  const linkedinUrl = 'https://www.linkedin.com/in/kylekentpa/'; // Replace with your actual LinkedIn URL
  const resumeUrl = 'https://registry.jsonresume.org/Kladenets/'; // Replace with your actual LinkedIn URL

  const links = [
    {
      text: 'View My GitHub',
      href: githubUrl,
    },
    {
      text: 'View My Resume',
      href: resumeUrl,
    },
    {
      text: 'Connect on LinkedIn',
      href: linkedinUrl,
    },
    {
      text: 'Send Me an Email',
      href: mailToLink,
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
          {/* Social & Resume Links */}

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 mt-6 w-full">
            {links.map((link, index) => (
              <motion.div
                key={index}
                className="relative inline-block cursor-pointer w-full"
                // No padding needed on wrapper if offsets are purely via transform on children
                variants={wrapperVariants}
                initial="rest"
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
                viewport={{ once: true }} // Only animate once
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} // Control animation speed and delay
              >
                {/* Black "Shadow" Background Layer */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-4 border-accent-200 dark:border-accent-800 z-0 my-transition-colors" // Fills the button's space
                  variants={shadowBackgroundVariants}
                />

                {/* Actual Button Content with Yellow Border */}
                <motion.a
                  className="contact-link my-transition-colors underline"
                  // Animation for the button itself (lifting)
                  initial={{ x: 0, y: 0 }} // Explicitly set initial state
                  whileHover={{ x: -3, y: -3 }} // Lifts up and left by 4px
                  whileTap={{ scale: 0.98 }}
                  transition={commonTransition} // Use the defined smooth transition
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </motion.a>
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
