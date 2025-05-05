import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

const projects = [
  {
    title: 'To-dos App',
    description:
      'A basic todo list application built for learning purposes, focusing on implementing Tailwind CSS, the Next.js App Router, and MinimongoDB for local storage.',
    tech: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'MinimongoDB',
      'TypeScript',
    ],
    link: 'https://github.com/Kladenets/next-intro',
    liveLink: null, // Add if deployed
  },
  // Add more projects here as needed
  // {
  //   title: 'Project Title 2',
  //   description: 'Description of another cool project.',
  //   tech: ['React', 'Firebase', 'Material UI'],
  //   link: 'https://github.com/yourusername/project2',
  //   liveLink: 'https://project2.example.com',
  // },
];

export default function Projects({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen w-full flex flex-col items-center justify-center p-8 snap-start bg-secondary text-text-primary" // Different background
    >
      <div className="max-w-5xl w-full">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-emphasis">
            Personal Projects
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.title} delay={index * 0.15}>
              <div className="bg-primary-background dark:bg-accent p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-primary dark:text-secondary">
                  {project.title}
                </h3>
                <p className="text-text-primary mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-1 text-emphasis">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-accent dark:bg-primary text-text-emphasized dark:text-text-primary text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedText>
          ))}
          {/* Placeholder for more projects */}
          {projects.length < 2 && ( // Show placeholder if few projects
            <AnimatedText delay={projects.length * 0.15}>
              <div className="bg-primary-background/50 dark:bg-accent/50 p-6 rounded-lg shadow-md border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center h-full min-h-[200px]">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  More projects coming soon!
                </p>
              </div>
            </AnimatedText>
          )}
        </div>
      </div>
    </section>
  );
}
