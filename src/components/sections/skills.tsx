import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

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
        'Terraform',
        'Workload Identity Federation',
        'GHAS (GitHub Advanced Security)',
        'Docker (Implied)',
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        'REST APIs',
        'GraphQL',
        'SQL',
        'PostgreSQL',
        'Node.js (Implied for Next.js)',
        'Python (Django)',
        'C/C++/C#',
        'Java',
      ],
    },
    {
      title: 'Tools & Practices',
      skills: [
        'Agile/Scrum',
        'Engineering Mentorship',
        'Observability',
        'A/B Testing (Optimizely)',
        'CI/CD',
        'DialogFlow',
      ],
    },
  ];

  return (
    <section
      id={id}
      className="min-h-[calc(100vh_-_7rem)] w-full flex flex-col items-center justify-center p-8 snap-start bg-background text-text" // Use theme colors
    >
      <div className="max-w-5xl w-full">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 bg-accent-200 dark:bg-accent-800 p-4 text-text">
            My Tech Stack & Skills
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedText key={category.title} delay={0.1 * index}>
              <div className="bg-background p-6 rounded-lg shadow-md h-full border border-text">
                <h3 className="border-b-2 pb-2 border-text font-semibold mb-4 text-text">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-primary">
                      {skill}
                    </li>
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
