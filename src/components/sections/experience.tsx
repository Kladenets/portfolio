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
      'Co-owned the transition of product availability and services to a DWF fragment, leading localized translation architecture, SSR availability loading, and CI/CD for server- and client-rendered microfrontends.',
      'Managed edge caching, request context, and production/test deployments for independently delivered fragments across Cloudflare Workers.',
      'Co-designed the Buy Experience monorepo migration CLI and CI/CD pattern, consolidating 52 per-market production deployments into one deployment per release.',
      'Diagnosed geolocation and data-integrity issues, including an 11% reduction in Google Geocoding API cost, a validation regression affecting 27 markets, and cross-user SSR state leakage.',
      'Drove development of Vaka, a real-time observability platform that improved error resolution in customer-facing online shopping systems and reduced MTTR.',
      'Modernized checkout foundations through ESLint, design-system, Renovate, security, and TypeScript upgrades across several repositories.',
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
      'Developed a HIPAA-compliant NLP healthcare chat app for post-surgery care using DialogFlow, React/Redux, and Django.',
      'Developed virtual assistant UI components in React, increasing user engagement and streamlining conversational feature integration.',
    ],
  },
];

export default function Experience({ id }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="max-w-5xl w-full py-0 md:py-16">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 lg:mb-16 bg-accent-200 dark:bg-accent-800 p-4 text-text my-transition-colors">
            <span className="block">Work Experience</span>
            <a
              href="/resume"
              className="mt-2 block text-right text-sm font-normal normal-case tracking-normal md:text-base my-transition-colors"
            >
              <span className="underline underline-offset-4">
                View full resume
              </span>{' '}
              &rarr;
            </a>
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
