import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

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
    company: 'BrickSimple LLC',
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
    <section
      id={id}
      className="min-h-[calc(100vh_-_7rem)] w-full flex flex-col items-center p-8 pt-0 snap-start bg-background text-text"
    >
      <div className="max-w-5xl w-full pt-20 md:pt-24 lg:pt-28">
        <AnimatedText className="w-fit">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 bg-accent-200 dark:bg-accent-800 p-4 text-text">
            Work Experience
          </h2>
        </AnimatedText>

        <div className="space-y-12 relative border-l-5 border-primary pl-6">
          {/* Dashed line effect (optional) */}
          {/* <div className="absolute top-0 bottom-0 left-[calc(0.75rem - 1px)] w-0.5 bg-primary"></div> */}

          {experiences.map((exp, index) => (
            <AnimatedText key={index} delay={index * 0.15}>
              <div className="relative pl-6">
                {/* Dot on the timeline */}
                {/* <div className="absolute -left-[calc(0.75rem_+_6px)] top-1 w-3 h-3 rounded-full bg-primary dark:bg-secondary border-2 border-primary-background dark:border-primary-background"></div> */}

                <h3 className="text-xl md:text-2xl font-semibold text-emphasis">
                  {exp.role}
                </h3>
                <p className="text-md font-medium text-primary mb-1">
                  {exp.company}{' '}
                  <span className="text-sm text-primary/70">
                    ({exp.location})
                  </span>
                </p>
                <p className="text-sm text-text-primary/70 mb-3">{exp.dates}</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-sm md:text-base text-text-primary">
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
