import AnimatedText from '@/components/animatedText';

import ShadowBox from '../shadowBox';

interface SectionProps {
  id: string;
}

export default function Skills({ id }: SectionProps) {
  const skillCategories = [
    {
      title: 'Frontend & Web Platforms',
      skills: [
        'React (v16-19)',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML/CSS',
        'Redux',
        'Preact',
        'Next.js',
        'Jest/React Testing Library',
        'Optimizely',
        'A/B Testing',
      ],
    },
    {
      title: 'Cloud, Delivery, & Agentic Tools',
      skills: [
        'Git',
        'GCP',
        'Terraform',
        'GitHub Actions',
        'CI/CD',
        'GitHub Advanced Security',
        'Cloudflare',
        'Agentic Development Workflows',
        'MCP Servers',
        'GitHub Copilot',
      ],
    },
    {
      title: 'Web Architecture & Edge Computing',
      skills: [
        'Microfrontends',
        'Server-Side Rendering (SSR)',
        'Client-Side Rendering (CSR)',
        'Edge Web Delivery',
        'Cloudflare Workers',
        'Edge Side Includes (ESI)',
        'Dynamic Web Framework',
        'Edge Variant Service (EVS)',
      ],
    },
    {
      title: 'Backend, Data, & Development',
      skills: [
        'SQL',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
        'C++/C#',
        'Python/Django',
        'Java',
        'Agile Development (Scrum/Kanban)',
        'Engineering Mentorship',
      ],
    },
  ];

  return (
    <section
      id={id}
      className="section" // Use theme colors
    >
      <div className="max-w-5xl w-full">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 bg-accent-200 dark:bg-accent-800 p-4 text-text my-transition-colors">
            My Tech Stack & Skills
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[repeat(4,14rem)] lg:justify-between">
          {skillCategories.map((category, index) => (
            <AnimatedText
              key={category.title}
              delay={0.1 * index}
              className="relative h-full"
            >
              <ShadowBox
                className="h-full"
                shadowBorderStyles="h-full w-full border-4 border-secondary-200 dark:border-secondary-800"
                mainBorderStyles="p-6 h-full w-full border-4 border-secondary-500 dark:border-secondary-300"
              >
                {/* border on h3 is just on the bottom and separates the title from the content */}
                <h3 className="border-b-1 pb-2 border-text/30 font-semibold mb-4 text-lg text-text my-transition-colors lg:flex lg:min-h-[4rem] lg:items-end">
                  {category.title}
                </h3>
                <ul className="space-y-2 h-full">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-text my-transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </ShadowBox>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
