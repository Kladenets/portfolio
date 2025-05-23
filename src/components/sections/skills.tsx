import AnimatedText from '@/components/animatedText';

import ShadowBox from '../shadowBox';

interface SectionProps {
  id: string;
}

// TODO: use boxed shadows instead of classic shadows to stay with the sharper theme (will these work in the header buttons?)
export default function Skills({ id }: SectionProps) {
  // Consider organizing skills into categories
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React (v16-19)',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux',
        'React Router',
        'Preact',
        'Angular',
        'Jest',
        'React Testing Library',
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        'Git',
        'GitHub Actions',
        'Google Cloud Platform (GCP)',
        'Infrastructure as Code (Terraform)',
        'Workload Identity Federation',
        'GHAS (GitHub Advanced Security)',
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        'REST',
        'GraphQL',
        'SQL',
        'PostgreSQL',
        'Node.js',
        'Python (Django)',
        'C++/C#',
        'Java',
      ],
    },
    {
      title: 'Tools & Practices',
      skills: [
        'Agile/Scrum',
        'A/B Testing (Optimizely)',
        'CI/CD',
        'Mentoring Engineers',
        'Pair Programming',
        'Code Reviews',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="border-b-1 pb-2 border-text/30 font-semibold mb-4 text-text my-transition-colors">
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
