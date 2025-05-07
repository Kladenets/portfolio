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
  {
    title: "Portfolio Website (you're here!)",
    description:
      'Single page portfolio website showcasing my projects, skills, and work experience. Built with Next.js, Tailwind CSS, and TypeScript.',
    tech: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/Kladenets/portfolio',
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
      className="section" // Different background
    >
      <div className="max-w-5xl w-full">
        <AnimatedText className="w-fit">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-emphasis bg-accent-200 dark:bg-accent-800 p-4 text-text my-transition-colors">
            Personal Projects
          </h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.title} delay={index * 0.15}>
              <div className="bg-background-300 p-6 rounded-lg shadow-md h-full flex flex-col my-transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-text my-transition-colors">
                  {project.title}
                </h3>
                <p className="text-text mb-4 flex-grow my-transition-colors">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-1 text-accent my-transition-colors">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-background text-text text-xs font-medium px-2.5 py-0.5 rounded my-transition-colors"
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
                      className="text-primary hover:underline my-transition-colors"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline my-transition-colors"
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
