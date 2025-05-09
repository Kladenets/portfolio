import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

// can I pull my experiences from my resume json site?
const experiences = [
  {
    company: 'IKEA North America Services, LLC',
    role: 'Software Engineer',
    dates: 'June 2022 – Present',
    location: 'Conshohocken, PA',
    points: [
      'Co-led development of Vaka, a greenfield observability platform, significantly reducing MTTR for customer-facing systems.',
      'Enhanced Cart SPA with React Router for robust A/B testing and smoother UX.',
      'Developed/optimized checkout features (React, TypeScript) improving load times and UI clarity.',
      'Founded and led a DevOps Guild standardizing workflows across GCP, Terraform, and GitHub Actions.',
      'Mentored 4 new engineers, accelerating onboarding with hands-on guidance (React, TS, Git).',
    ],
  },
  {
    company: 'Proconex',
    role: 'Software Engineer',
    dates: 'Feb 2021 – June 2022',
    location: 'Royersford, PA',
    points: [
      'Architected and developed dynamic Angular components for industrial control reporting and device interaction.',
      'Designed a configurable alert infrastructure using SQL stored procedures and Angular.',
      'Optimized SQL stored procedures, significantly reducing query latency.',
      'Refactored legacy Angular and SQL codebases to improve performance and maintainability.',
    ],
  },
  {
    company: 'BrickSimple, LLC',
    role: 'Software Engineer',
    dates: 'Feb 2020 – Jan 2021',
    location: 'Doylestown, PA',
    points: [
      'Developed a HIPAA compliant NLP healthcare chat app using DialogFlow, React/Redux, and Django.',
      'Built React UI components for a virtual assistant, increasing user engagement.',
      'Worked directly with clients from requirements gathering to delivery.',
    ],
  },
  {
    company: 'First Trust Portfolios',
    role: 'Software Engineer',
    dates: 'Aug 2016 – Sep 2018',
    location: 'Wheaton, IL',
    points: [
      'Modernized legacy financial applications, improving code readability and maintainability.',
      'Created SQL tools for database optimization and data integrity.',
    ],
  },
];

export default function Experience({ id }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="max-w-5xl w-full py-0 md:py-16">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 lg:mb-16 bg-accent-200 dark:bg-accent-800 p-4 text-text my-transition-colors">
            Work Experience
          </h2>
        </AnimatedText>

        <div className="space-y-12 relative border-l-5 border-secondary-600 dark:border-secondary-300 pl-6 pb-8 snap-end scroll-mb-10 my-transition-colors">
          {/* Dashed line effect (optional) */}
          {/* <div className="absolute top-0 bottom-0 left-[calc(0.75rem - 1px)] w-0.5 bg-primary"></div> */}

          {experiences.map((exp, index) => (
            <AnimatedText key={index} delay={index * 0.15}>
              <div className="relative pl-6">
                {/* Dot on the timeline */}
                {/* <div className="absolute -left-[calc(0.75rem_+_6px)] top-1 w-3 h-3 rounded-full bg-primary dark:bg-secondary border-2 border-primary-background dark:border-primary-background"></div> */}

                <h3 className="text-xl md:text-2xl font-semibold text-text my-transition-colors">
                  {exp.role}
                </h3>
                <p className="text-md font-medium text-secondary-700 dark:text-secondary-300 mb-1 my-transition-colors">
                  {exp.company}{' '}
                  <span className="text-sm text-secondary-700/80 dark:text-secondary-300/80 whitespace-nowrap my-transition-colors">
                    ({exp.location})
                  </span>
                </p>
                <p className="text-sm text-text-primary/70 mb-3">{exp.dates}</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm md:text-base text-text-primary my-transition-colors">
                  {exp.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
