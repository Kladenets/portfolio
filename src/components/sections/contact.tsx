import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

export default function Contact({ id }: SectionProps) {
  const email = 'kkent908@gmail.com';
  const githubUrl = 'https://github.com/Kladenets/';
  const linkedinUrl = 'https://www.linkedin.com/in/kylekentpa/'; // Replace with your actual LinkedIn URL
  const resumeUrl = 'https://registry.jsonresume.org/Kladenets/'; // Replace with your actual LinkedIn URL

  return (
    <section id={id} className="section">
      <div className="max-w-5xl text-center w-full">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text my-transition-colors">
            Lets Connect
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg md:text-xl text-text mb-10 md:mb-12 leading-relaxed my-transition-colors">
            I&apos;m passionate about crafting beautiful and intuitive digital
            experiences. Whether you have a project in mind, a role to discuss,
            or just want to chat about tech, I&apos;d love to hear from you!
          </p>
        </AnimatedText>

        <div className="space-y-6 md:space-y-8">
          {/* Email Button */}
          <AnimatedText delay={0.4}>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/80 text-text font-semibold py-3 px-8 rounded-lg text-lg w-full sm:w-auto shadow-md hover:shadow-lg my-transition-colors"
            >
              {/* <EnvelopeIcon className="w-5 h-5 mr-3" /> */}{' '}
              {/* If you have an icon */}
              Send Me an Email
            </a>
          </AnimatedText>

          {/* Social & Resume Links */}
          <AnimatedText delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-accent dark:hover:text-secondary transition-colors font-medium group my-transition-colors"
              >
                {/* <GithubIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                View My GitHub
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-accent dark:hover:text-secondary transition-colors font-medium group my-transition-colors"
              >
                {/* <LinkedinIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                Connect on LinkedIn
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer" // Or use download attribute: download="kyle-kent-resume.pdf"
                className="flex items-center text-primary hover:text-accent dark:hover:text-secondary transition-colors font-medium group my-transition-colors"
              >
                {/* <DocumentDownloadIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> */}
                Online Resume
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
