import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

const projects = [
  {
    title: "Portfolio Website (you're here!)",
    description:
      'Single page portfolio website showcasing my projects, skills, and work experience. Built with Next.js, Tailwind CSS, and TypeScript.',
    tech: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'Motion',
      'TypeScript',
      'Github Pages',
    ],
    link: 'https://github.com/Kladenets/portfolio',
    liveLink: null, // Add if deployed
  },
  {
    title: 'To-dos App',
    description:
      'A basic todo list application built for learning purposes, focusing on implementing Tailwind CSS, the Next.js App Router, and MinimongoDB for local storage.',
    tech: [
      'Next.js (App Router)',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'MinimongoDB',
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
    <section id={id} className="section">
      <div className="max-w-5xl w-full">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-emphasis bg-accent-200 dark:bg-accent-800 p-4 text-text my-transition-colors">
            Personal Projects
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedText
              key={project.title}
              delay={index * 0.15}
              className="relative"
            >
              {/* Black Shadow Layer - Same size as button, but transformed */}
              <div
                className="absolute top-0 left-0 w-full h-full border-4 border-secondary-200 dark:border-secondary-800 z-0 my-transition-colors"
                style={{
                  transform: 'translate(6px, 6px)',
                }} /* Offset 8px right, 8px down */
              ></div>

              <div className="relative bg-background p-6 h-full flex flex-col my-transition-colors text-text border-4 border-secondary-500 dark:border-secondary-300 z-10 my-transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-text border-b-2 border-text/30 pb-2 my-transition-colors">
                  {project.title}
                </h3>
                <p className="text-text mt-2 mb-4 flex-grow my-transition-colors">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-1 text-text my-transition-colors">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-accent-100 dark:bg-accent-600 text-text text-xs font-medium px-2.5 py-1 my-transition-colors"
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
                      className="text-text hover:underline my-transition-colors"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text hover:underline my-transition-colors"
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
              <div className="bg-background/50 dark:bg-accent/50 p-6 rounded-lg shadow-md border-2 border-dashed border-gray-400 dark:border-gray-600 flex items-center justify-center h-full min-h-[200px] my-transition-colors">
                <p className="text-center text-gray-500 dark:text-gray-400 my-transition-colors">
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
