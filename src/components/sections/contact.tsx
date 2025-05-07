'use client';

import { motion } from 'framer-motion';

import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

export default function Contact({ id }: SectionProps) {
  const email = 'kkent908@gmail.com';
  const mailToLink = `mailto:${email}`;
  const githubUrl = 'https://github.com/Kladenets/';
  const linkedinUrl = 'https://www.linkedin.com/in/kylekentpa/'; // Replace with your actual LinkedIn URL
  const resumeUrl = 'https://registry.jsonresume.org/Kladenets/'; // Replace with your actual LinkedIn URL

  return (
    <section id={id} className="section">
      <div className="max-w-5xl text-center w-full flex flex-col items-center">
        <AnimatedText className="w-fit justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-10 md:mb-16 text-emphasis bg-accent-200 dark:bg-accent-800 p-7 md:p-10 text-text my-transition-colors">
            Let&apos;s Connect
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-text mb-10 md:mb-12 leading-relaxed my-transition-colors">
            I&apos;m passionate about crafting beautiful and intuitive digital
            experiences and the ever-changing tech they&apos;re built with.
            Whether you have a project in mind, a role to discuss, or just want
            to chat about tech, I&apos;d love to hear from you!
          </p>
        </AnimatedText>

        <div className="space-y-6 md:space-y-8">
          {/* Social & Resume Links */}
          <AnimatedText delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link my-transition-colors"
              >
                {/* <GithubIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                View My GitHub
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer" // Or use download attribute: download="kyle-kent-resume.pdf"
                className="contact-link my-transition-colors"
              >
                {/* <DocumentDownloadIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                View My Resume
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link my-transition-colors"
              >
                {/* <LinkedinIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                Connect on LinkedIn
              </a>
              <a
                href={mailToLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link my-transition-colors"
              >
                {/* <GithubIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                Send Me an Email
              </a>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={0.8} className="mt-12 md:mt-16">
          <p className="text-sm text-text/70">
            Based in the Greater Philadelphia Area – Open to remote
            opportunities.
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}
