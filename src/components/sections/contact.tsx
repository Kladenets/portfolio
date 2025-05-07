import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

export default function Contact({ id }: SectionProps) {
  const email = 'kkent908@gmail.com';
  const githubUrl = 'https://github.com/Kladenets';
  const linkedinUrl = 'YOUR_LINKEDIN_URL'; // Replace with your actual LinkedIn URL

  return (
    <section
      id={id}
      className="min-h-[calc(100vh_-_7rem)] w-full flex flex-col items-center justify-center p-8 snap-start bg-background text-text"
    >
      <div className="max-w-5xl w-full text-center">
        <AnimatedText className="w-fit">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emphasis bg-accent-200 dark:bg-accent-800 p-4 text-text">
            Get In Touch
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg text-text mb-8">
            I am currently open to new opportunities and collaborations. Feel
            free to reach out!
          </p>
        </AnimatedText>

        <div className="space-y-6">
          <AnimatedText delay={0.4}>
            <a
              href={`mailto:${email}`}
              className="inline-block bg-primary hover:bg-opacity-80 text-text-emphasized font-medium py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Email Me: {email}
            </a>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-emphasis dark:hover:text-secondary transition-colors"
              >
                {/* Replace with a proper GitHub Icon SVG */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              {/* Add LinkedIn Icon/Link */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-emphasis dark:hover:text-secondary transition-colors"
              >
                {/* Replace with a proper LinkedIn Icon SVG */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
